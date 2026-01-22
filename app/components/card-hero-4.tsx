import { DollarSign } from "lucide-react";

export default function CardHero4() {
  return (
    <div className="p-8 h-full bg-white border border-neutral-200 rounded-2xl shadow-lg w-[320px] md:w-100 lg:w-125">
      <div id="title" className="flex items-center gap-1">
        <DollarSign className="w-8 h-8 text-neutral-500" />
        <h3 className="font-semibold text-neutral-500">Controle Financeiro</h3>
      </div>
      <div id="content">
        <div id="text" className="mt-4">
          <h4 className="font-medium text-neutral-600">Total a receber</h4>
          <div id="quantia" className="flex items-baseline">
            <h3 className="text-3xl font-semibold text-neutral-800 lg:text-4xl">
              R$12.000
            </h3>
            <h3 className="text-lg font-semibold text-neutral-800 lg:text-xl">
              ,00
            </h3>
          </div>
        </div>
        <div id="meta">
          <div className="h-3 w-full bg-indigo-500 rounded-full mt-4"></div>
          <div className="w-full justify-between flex mt-2">
            <p className="text-sm text-neutral-600 lg:text-md">
              Progresso da meta
            </p>
            <p className="text-sm font-semibold text-neutral-600 lg:text-md">
              100%
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse mt-4">
          <h4 className="font-medium text-neutral-600 cursor-pointer">
            Ver mais
          </h4>
        </div>
      </div>
    </div>
  );
}
