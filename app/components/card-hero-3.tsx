import { Plus } from "lucide-react";

export default function CardHero3() {
  return (
    <div className="px-6 py-4 bg-indigo-500 border flex justify-between items-center border-neutral-200 rounded-2xl shadow-lg w-[320px] md:w-100 lg:w-125 cursor-pointer hover:bg-indigo-600 transition-colors duration-300 ease-in-out">
        <h2 className="font-semibold text-white text-md lg:text-xl">Adicionar nova tarefa</h2>
        <Plus className="w-6 h-6 text-white lg:w-8 lg:h-8"/>
    </div>
  );
}
