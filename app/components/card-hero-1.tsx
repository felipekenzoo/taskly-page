import { Laptop } from "lucide-react";

export default function CardHero1() {
  return (
    <div className="p-8 h-full bg-white border border-neutral-200 rounded-2xl shadow-lg w-[320px] md:w-100 lg:w-125">
      <div id="title" className="flex items-center gap-2 mb-4">
        <Laptop className="w-8 h-8 text-indigo-500" />
        <h2 className="text-neutral-950 text-xl md:text-2xl font-semibold">
          Website - Portfolio
        </h2>
      </div>
      <div>
        <p className="lg:text-xl">
          Cliente:<span className="font-semibold"> João Silva</span>
        </p>
        <p className="lg:text-xl">
          Prazo:<span className="font-semibold"> 12/03/2026</span>
        </p>
      </div>
      <div id="tags" className="flex flex-wrap gap-2 mt-4">
        <p className="w-fit bg-indigo-200 border border-indigo-300 rounded-full px-3 py-1 text-indigo-700 font-semibold text-xs">
          Web Design
        </p>
        <p className="w-fit bg-indigo-200 border border-indigo-300 rounded-full px-3 py-1 text-indigo-700 font-semibold text-xs">
          UX/UI Design
        </p>
        <p className="w-fit bg-amber-200 border border-amber-300 rounded-full px-3 py-1 text-amber-700 font-semibold text-xs">
          Em andamento
        </p>
      </div>
      <div id="progress" className="pt-4">
        <div className="h-3 w-full bg-indigo-200 rounded-full"></div>
        <div className="h-3 w-1/2 bg-indigo-500 rounded-full -mt-3"></div>
      </div>
      <div id="indicators" className="pt-4">
        <p className="text-sm lg:text-lg">Progresso do projeto</p>
        <p className="text-sm font-semibold lg:text-lg">45% concluído</p>
      </div>
      <span className="w-full flex flex-row justify-end text-neutral-500 font-semibold cursor-pointer">Ver mais</span>
    </div>
  );
}
