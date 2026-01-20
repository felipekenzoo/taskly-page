import CardHero1 from "../components/card-hero-1";
import CardHero2 from "../components/card-hero-2";
import CardHero3 from "../components/card-hero-3";
import ButtonPrimary from "../components/primarybutton";
import ButtonSecondary from "../components/secondarybutton";

export default function Hero() {
  return (
    <section className="bg-neutral-50 py-32 flex flex-col items-center justify-center px-6 md:px-12 lg:px-28">
      <div className="flex flex-col items-center text-wrap justify-center lg:max-w-240 ">
        <h1 className="text-neutral-950 text-center font-semibold text-3xl md:text-4xl lg:text-6xl mb-6">
          Gerencie seus freelas e finanças de forma{" "}
          <span className="font-semibold text-indigo-500">
            simples e intuitiva
          </span>
        </h1>
        <p className="text-center text-neutral-700 text-md md:text-xl lg:text-xl lg:max-w-xl ">
          Trabalha de forma independente? - Conheça a nossa plataforma de gestão
          voltada para freelancers.
        </p>
      </div>
      <div className="flex gap-3 pt-4">
        <ButtonPrimary title="Assista ao vídeo" href="#" />
        <ButtonSecondary title="Experimente grátis" href="#" />
      </div>

      <div id="dashboard" className="mt-16">
        <div className="flex flex-col gap-4 lg:flex-row lg:gap-8 justify-center items-center bg-[url('/bg-hero.jpg')] bg-no-repeat bg-center bg-contain lg:p-16 px-4 py-16 rounded-4xlxl">
          <div id="left">
            <CardHero1 />
          </div>
          <div id="right" className="flex flex-col gap-4">
            <CardHero2 />
            <CardHero3 />
          </div>
        </div>
      </div>
    </section>
  );
}
