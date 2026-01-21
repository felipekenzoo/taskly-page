import { ReactNode } from "react";

type HatProps = {
  icon: ReactNode;
  title: string;
};

export default function Hat({ icon, title }: HatProps) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-indigo-100 rounded-full border border-indigo-200">
      <span className=" text-indigo-600">{icon}</span>
      <h5 className="text-sm font-medium text-indigo-600
      lg:text-lg">{title}</h5>
    </div>
  )
}
