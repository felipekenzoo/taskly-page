import {
  BadgeCheck,
  Shield,
  Star,
  Users,
  Heart,
  ArrowRight,
} from "lucide-react";

export default function FreeTrial() {
  return (
    <section className="bg-neutral-50 px-6 md:px-12 lg:px-28 py-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        <div className="flex-1 bg-white border border-neutral-200 rounded-3xl p-10 shadow-lg">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-indigo-100 text-indigo-600 text-sm font-medium">
            <BadgeCheck size={16} />
            Oferta especial
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-indigo-600 mb-6 max-w-xl">
            Comece seu teste gratuito hoje
          </h2>

          <p className="text-neutral-600 mb-8 max-w-lg">
            Experimente todas as funcionalidades premium por 14 dias. Cancele
            quando quiser, sem complicações.
          </p>

          <ul className="flex flex-col gap-4 mb-10 text-sm text-neutral-700">
            <li className="flex items-center gap-3">
              <BadgeCheck size={18} className="text-indigo-500" />
              Sem cartão de crédito necessário
            </li>
            <li className="flex items-center gap-3">
              <BadgeCheck size={18} className="text-indigo-500" />
              Configuração em menos de 2 minutos
            </li>
            <li className="flex items-center gap-3">
              <BadgeCheck size={18} className="text-indigo-500" />
              Dados protegidos e seguros
            </li>
          </ul>

          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition"
          >
            Começar agora
            <ArrowRight size={18} />
          </a>

          <p className="text-sm text-indigo-600 mt-4">
            Grátis por 14 dias • Sem compromisso
          </p>
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-md flex items-center gap-4">
            <div className="p-3 rounded-xl bg-indigo-100 text-indigo-600">
              <Users size={22} />
            </div>
            <div>
              <p className="text-3xl font-semibold text-neutral-900">25K+</p>
              <span className="text-sm text-neutral-600">
                Usuários ativos
              </span>
            </div>
          </div>

          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-md flex items-center gap-4">
            <div className="p-3 rounded-xl bg-indigo-100 text-indigo-600">
              <Star size={22} />
            </div>
            <div>
              <p className="text-3xl font-semibold text-neutral-900">4.9/5</p>
              <span className="text-sm text-neutral-600">
                Avaliação média
              </span>
            </div>
          </div>

          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-md flex items-center gap-4">
            <div className="p-3 rounded-xl bg-indigo-100 text-indigo-600">
              <Heart size={22} />
            </div>
            <div>
              <p className="text-3xl font-semibold text-neutral-900">98%</p>
              <span className="text-sm text-neutral-600">
                Taxa de satisfação
              </span>
            </div>
          </div>

          <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-md flex items-center gap-4">
            <div className="p-3 rounded-xl bg-indigo-100 text-indigo-600">
              <Shield size={22} />
            </div>
            <div>
              <p className="font-medium text-neutral-900">
                Certificado ISO 27001
              </p>
              <span className="text-sm text-neutral-600">
                Seus dados estão seguros e protegidos com criptografia de ponta
                a ponta
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
