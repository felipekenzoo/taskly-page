import { DollarSign } from "lucide-react";
import Hat from "../components/hat";

export default function Plans() {
  return (
    <section className="bg-neutral-50 pt-32 flex flex-col items-center justify-center px-6 md:px-12 lg:px-28 lg:pt-0">
      <Hat icon={<DollarSign size={20} />} title="Diferenciais" />
      <div className="flex flex-col items-center text-wrap justify-center lg:max-w-240 pt-8">
        <h1 className="text-neutral-950 text-center font-semibold text-3xl md:text-4xl lg:text-6xl lg:max-w-2xl mb-6">
          Tudo o que você precisa
          <span className="font-semibold text-indigo-500"> em um lugar só</span>
        </h1>
        <p className="text-center lg:text-xl text-neutral-600">
          Encante-se com um dashboard totalmente modular e personalizável
        </p>
      </div>
    </section>
  );
}
