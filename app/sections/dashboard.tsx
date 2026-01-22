import { Pencil } from "lucide-react";
import CardHero1 from "../components/card-hero-1";
import CardHero2 from "../components/card-hero-2";
import CardHero4 from "../components/card-hero-4";
import CardHero5 from "../components/card-hero-5";
import Hat from "../components/hat";

export default function Dashboard() {
  return (
    <section className="bg-neutral-50 py-16 lg:pt-16 flex flex-col items-center justify-center px-6 md:px-12 lg:px-28 lg:pb-32">
      <Hat icon={<Pencil size={20} />} title="Diferenciais" />
      <div className="flex flex-col items-center text-wrap justify-center lg:max-w-240 pt-8">
        <h1 className="text-neutral-950 text-center font-semibold text-3xl md:text-4xl lg:text-6xl lg:max-w-2xl mb-6">
          Tudo o que você precisa
          <span className="font-semibold text-indigo-500">
            {" "}
            em um lugar só
          </span>
        </h1>
        <p className="text-center lg:text-xl text-neutral-600">Encante-se com um dashboard totalmente modular e personalizável</p>
      </div>
      <div
        className="bg-neutral-50 py-16 lg:pt-20 flex flex-col gap-4 justify-center px-6 md:px-12 lg:px-28 lg:pb-32
        lg:flex-row lg:gap-8"
      >
        <div id="left" className="flex flex-col gap-4">
          <CardHero1 />
          <CardHero5 />
        </div>
        <div id="right" className="flex flex-col gap-4">
          <CardHero2 />
          <CardHero4 />
        </div>
      </div>
    </section>
  );
}
