import { Building, DollarSign, TrendingUp, UserRound } from "lucide-react";
import Hat from "../components/hat";
import Check from "../components/check";

export default function Plans() {
  return (
    <section className="bg-neutral-50 flex flex-col items-center justify-center px-6 md:px-12 lg:px-28 lg:pt-0 mb-12">
      <Hat icon={<DollarSign size={20} />} title="Diferenciais" />
      <div className="flex flex-col items-center text-wrap justify-center lg:max-w-240 pt-8">
        <h1 className="text-neutral-950 text-center font-semibold text-3xl md:text-4xl lg:text-6xl lg:max-w-2xl mb-6">
          Investimento que cabe no seu
          <span className="font-semibold text-indigo-500"> bolso</span>
        </h1>
        <p className="text-center lg:text-xl text-neutral-600 mb-12">
          Pode tirar o escorpião do bolso! Nossos planos são acessíveis!
        </p>
      </div>
      <div id="plans" className="flex flex-col lg:flex lg:flex-row gap-5">
        <div className="p-8 h-full bg-white border border-neutral-200 rounded-2xl shadow-lg w-[320px] md:w-100 lg:w-110 lg:h-120">
          <UserRound size={48} className="text-indigo-500 my-2" />
          <div className="flex flex-col gap-2">
            <p className="text-lg">Plano básico</p>
            <h2 className="font-semibold text-3xl mb-4 lg:text-4xl">Grátis</h2>
          </div>
          <div className="mb-4">
            <Check label="Crie 1 projeto sem custo" />
            <Check label="Acesso limitado a widgets" />
            <Check label="Controle básico de tempo" />
            <Check label="Suporte via e-mail" />
          </div>
          <a
            href="#"
            className="px-4 py-2 text-sm bg-neutral-950 font-semibold text-white rounded-2xl text-center"
          >
            Escolher este plano
          </a>
        </div>
        <div className="p-8 h-full bg-indigo-600 border border-indigo-200 rounded-2xl shadow-lg w-[320px] md:w-100 lg:w-110 lg:h-120">
          <TrendingUp size={48} className="text-neutral-50 my-2" />
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <p className="text-lg text-neutral-50">Plano Pro</p>
              <span className="bg-indigo-300/50 text-neutral-50 text-sm backdrop-blur-3xl border border-indigo-300 mr-2 px-2.5 py-1 rounded-full">
                Mais popular
              </span>
            </div>
            <div className="flex gap-1">
              <h2 className="font-semibold text-3xl lg:text-4xl mb-4 text-neutral-50">
                R$19,90
              </h2>
              <p className="font-semibold text-sm mt-3 text-neutral-50">,00</p>
            </div>
          </div>
          <div className="mb-4">
            <Check label="Acesso a todos os recursos" color="text-neutral-50" />
            <Check label="Projetos ilimitados" color="text-neutral-50" />
            <Check label="Relatórios avançados" color="text-neutral-50" />
            <Check label="Acesso às integrações" color="text-neutral-50" />
            <Check
              label="Personalização por categorias"
              color="text-neutral-50"
            />
          </div>
          <a
            href="#"
            className="px-4 py-2 text-sm bg-neutral-50 font-semibold text-indigo-600 rounded-2xl text-center"
          >
            Escolher este plano
          </a>
        </div>
        <div className="p-8 h-full bg-white border border-neutral-200 rounded-2xl shadow-lg w-[320px] md:w-100 lg:w-110 lg:h-120">
          <Building size={48} className="text-indigo-500 my-2" />
          <div className="flex flex-col gap-2">
            <p className="text-lg">Plano para empresas</p>
            <h2 className="font-semibold text-3xl lg:text-4xl mb-4">
              Valor sob demanda
            </h2>
          </div>
          <div className="mb-4">
            <Check label="Usuários ilimitados" />
            <Check label="Gestão avançada" />
            <Check label="Dashboards personalizados" />
            <Check label="Integrações sob demanda" />
            <Check label="Suporte prioritário com SLA" />
            <Check label="Onboarding dedicado" />
          </div>
          <a
            href="#"
            className="px-4 py-2 text-sm bg-neutral-950 font-semibold text-white rounded-2xl text-center"
          >
            Escolher este plano
          </a>
        </div>
      </div>
    </section>
  );
}
