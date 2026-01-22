import { Zap } from "lucide-react";
import Hat from "../components/hat";
import Feature from "../components/feature";

export default function Features() {
  return (
    <section className="bg-neutral-50 py-16 lg:pt-32 flex flex-col items-center justify-center px-6 md:px-12 lg:px-28 lg:pb-32">
      <Hat icon={<Zap size={20} />} title="Diferenciais" />
      <div className="flex flex-col items-center text-wrap justify-center lg:max-w-240 pt-8">
        <h1 className="text-neutral-950 text-center font-semibold text-3xl md:text-4xl lg:text-6xl lg:max-w-2xl mb-6">
          Administre tudo de forma
          <span className="font-semibold text-indigo-500">
            {" "}
            prática e eficiente
          </span>
        </h1>
      </div>
      <p className="text-center lg:text-xl text-neutral-600">
        Plataforma projetada para te entregar todas as informações que precisa,
        sem complicação
      </p>
      <div className="flex flex-col gap-12 lg:gap-24 mt-8">
        <Feature
          source="/feature-1.svg"
          title="Novos projetos"
          description="Dê vida a suas ideias e separe-as por tags e assuntos, pensadas para você personalizá-las e dar a sua cara."
        />
        <Feature
          source="/feature-2.svg"
          title="Não se perca"
          description="Categorize cada demanda sua com tags, seja ela por setor ou por urgência, nunca mais se afunde em demandas perdidas e esquecidas."
          reverse
        />
        <Feature
          source="/feature-3.svg"
          title="Veja seu dinheiro!"
          description="Acompanhe em tempo real seus pagamentos recebidos e pendentes com gráficos detalhados"
        />
      </div>
    </section>
  );
}
