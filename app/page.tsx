import "../styles/home.module.scss";
import Hero from "components/hero";
export default async function Home() {
  return (
    <>
      <section className="w-full h-screen">
        <Hero />
      </section>
    </>
  );
}
