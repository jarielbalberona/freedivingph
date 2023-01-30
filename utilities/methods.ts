import { FILE_PATH } from "types/files";
import { DISCOUNT_TYPE } from "types/products";

export const getImageSrc = (
  name: string,
  count: any = null,
  type: string = "mask"
) => {
  let src = FILE_PATH.SHOP_MASKS;

  if (type === "fins") {
    src = FILE_PATH.SHOP_STARTER_FINS;
  }

  let file_name = `${src}/${name.toLowerCase().replace(/ /g, "-")}`;
  if (count) {
    file_name = `${file_name}-${count}`;
  }
  file_name = `${file_name}.jpg`;
  return file_name;
};

export const getDiscountedPrice = (
  amount: any,
  type = "masks",
  discounts: any
) => {
  let discount_text = "";
  const discount = discounts.find((discount: any) => discount.items === type);

  let discounted_price = amount;
  if (amount && discount) {
    if (discount) {
      if (discount.type === DISCOUNT_TYPE.PERCENTAGE) {
        discounted_price = amount - amount * (Number(discount.amount) / 100);
        discount_text = `(${discount.amount}% Off)`;
      } else {
        discounted_price = amount - Number(discount.amount);
        discount_text = `(${discount.amount} Off)`;
      }
    }
    discounted_price = new Intl.NumberFormat("fil-PH", {
      style: "currency",
      currency: "PHP",
    }).format(discounted_price);
  }
  return { price: discounted_price, discount: discount_text };
};
