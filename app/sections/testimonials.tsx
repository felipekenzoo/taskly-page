"use client";

import { UsersRoundIcon } from "lucide-react";
import Hat from "../components/hat";
import Carroussel from "../components/carroussel";

export default function Testimonials() {
  return (
    <section className="bg-neutral-50 py-16 lg:py-16 px-6 md:px-12 lg:px-28">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        <Hat icon={<UsersRoundIcon size={20} />} title="Depoimentos" />

        <h2 className="text-neutral-950 font-semibold text-3xl md:text-4xl lg:text-5xl mt-8 mb-4">
          Ouça de quem usa o<span className="text-indigo-500"> Taskly</span>
        </h2>

        <p className="text-center lg:text-xl text-neutral-600 mb-12">
          Conheça usuários que salvaram sua rotina com nossa plataforma
        </p>
      </div>

      <div className="flex justify-center">
        <Carroussel />
      </div>
    </section>
  );
}
