import "../styles/home.module.scss";

export default async function Home() {
  return (
    <>
      <section className="w-full h-screen">
        <img
          src="/assets/images/freedivingph.jpg"
          className="object-cover w-full h-full"
          alt="Image alt text"
        />
      </section>
    </>
  );
}
