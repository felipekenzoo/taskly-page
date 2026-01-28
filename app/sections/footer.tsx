import { Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200 px-6 md:px-12 lg:px-28 pt-16 pb-8">
      <div className="flex flex-col lg:flex-row justify-between gap-12">
        <div className="flex flex-col gap-4 max-w-sm">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white font-semibold">
              ✓
            </div>
            <span className="text-lg font-semibold text-neutral-900">
              Taskly
            </span>
          </div>

          <p className="text-neutral-600 text-sm">
            A plataforma completa para freelancers organizarem projetos e
            gerenciarem finanças.
          </p>

          <div className="flex gap-3 mt-2">
            <a
              href="#"
              className="p-2 rounded-lg border border-neutral-200 text-neutral-600 hover:text-neutral-900"
            >
              <Twitter size={16} />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg border border-neutral-200 text-neutral-600 hover:text-neutral-900"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg border border-neutral-200 text-neutral-600 hover:text-neutral-900"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div className="flex flex-col gap-3">
            <p className="font-medium text-neutral-900">Produto</p>
            <a href="#" className="text-neutral-600 hover:text-neutral-900">
              Recursos
            </a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900">
              Preços
            </a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900">
              Segurança
            </a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900">
              Atualizações
            </a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900">
              Demonstração
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-medium text-neutral-900">Empresa</p>
            <a href="#" className="text-neutral-600 hover:text-neutral-900">
              Sobre nós
            </a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900">
              Blog
            </a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900">
              Carreiras
            </a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900">
              Imprensa
            </a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900">
              Parceiros
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-medium text-neutral-900">Recursos</p>
            <a href="#" className="text-neutral-600 hover:text-neutral-900">
              Documentação
            </a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900">
              Guias
            </a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900">
              API
            </a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900">
              Status
            </a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900">
              Changelog
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-medium text-neutral-900">Legal</p>
            <a href="#" className="text-neutral-600 hover:text-neutral-900">
              Privacidade
            </a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900">
              Termos
            </a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900">
              Cookies
            </a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900">
              Licenças
            </a>
            <a href="#" className="text-neutral-600 hover:text-neutral-900">
              Conformidade
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-neutral-200 flex flex-col md:flex-row justify-between gap-4 text-sm text-neutral-600">
        <p>© 2025 Taskly. Todos os direitos reservados.</p>

        <div className="flex gap-4">
          <a href="#" className="hover:text-neutral-900">
            Política de Privacidade
          </a>
          <a href="#" className="hover:text-neutral-900">
            Termos de Uso
          </a>
          <a href="#" className="hover:text-neutral-900">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
}
