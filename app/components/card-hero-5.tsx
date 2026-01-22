import { DollarSign } from "lucide-react";

export default function CardHero5() {
  return (
    <div className="p-8 h-full bg-white border border-neutral-200 rounded-2xl shadow-lg w-[320px] md:w-100 lg:w-125">
      <header className="flex items-center gap-2 text-neutral-400">
        <DollarSign className="w-5 h-5" />
        <h3 className="text-xs font-medium uppercase tracking-wide">
          Controle financeiro
        </h3>
      </header>

      <section className="mt-6">
        <div className="flex items-end justify-between h-40 gap-1">
          <Bar height="70%" label="Jan" />
          <Bar height="25%" label="Fev" />
          <Bar height="60%" label="Mar" active />
          <Bar height="45%" label="Abr" />
          <Bar height="40%" label="Mai" />
          <Bar height="30%" label="Jun" />
          <Bar height="25%" label="Jul" />
          <Bar height="55%" label="Ago" />
          <Bar height="30%" label="Set" />
          <Bar height="40%" label="Out" />
          <Bar height="65%" label="Nov" />
          <Bar height="80%" label="Dez" />
        </div>
      </section>
    </div>
  );
}

function Bar({
  height,
  label,
  active = false,
}: {
  height: string;
  label: string;
  active?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-2 flex-1">
      <div className="w-3 lg:w-4 h-32 bg-neutral-100 rounded-full flex items-end overflow-hidden">
        <div
          className={`w-full rounded-full ${
            active ? "bg-indigo-500" : "bg-indigo-200"
          }`}
          style={{ height }}
        />
      </div>

      <span
        className={`text-[10px] lg:text-sm ${
          active
            ? "text-neutral-900 font-semibold"
            : "text-neutral-400"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
