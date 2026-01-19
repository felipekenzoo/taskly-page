import ButtonPrimary from "../components/primarybutton";
import ButtonSecondary from "../components/secondarybutton";

export default function Hero() {
  return (
    <section className="bg-neutral-50 py-32 flex flex-col items-center justify-center px-6 md:px-12 lg:px-28">
      <div className="flex flex-col items-center text-wrap justify-center lg:max-w-240 ">
        <h1 className="text-neutral-950 text-center font-semibold text-3xl md:text-4xl lg:text-6xl mb-6">
          Gerencie seus freelas e finanças de forma{" "}
          <span className="font-semibold text-violet-500">
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
    </section>
  );
}
