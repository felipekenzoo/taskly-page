import { Bell, Paperclip, UserRound } from "lucide-react";
import Image from "next/image";

export default function CardHero2() {
  return (
    <div className="p-8 h-full bg-white border border-neutral-200 rounded-2xl shadow-lg w-[320px] md:w-100 lg:w-125">
      <Image
        src="/profile-hero.jpg"
        alt="Profile Picture"
        width={1240}
        height={1240}
        quality={100}
        priority
        className="rounded-full w-24 h-24 lg:w-32 lg:h-32 object-cover"
      />
      <div id="name" className="mt-4">
        <h2 className="text-neutral-950 text-center text-2xl md:text-4xl font-semibold">
          Olá, Felipe Kenzo!
        </h2>
      </div>
      <div id="icons" className="mt-4 flex gap-4">
        <div className="p-3 border-2 border-black/7 rounded-full">
          <Bell className="w-8 h-8 text-neutral-950" />
        </div>
        <div className="p-3 border-2 border-black/7 rounded-full">
          <Paperclip className="w-8 h-8 text-neutral-950" />
        </div>
        <div className="p-3 border-2 border-black/7 rounded-full">
          <UserRound className="w-8 h-8 text-neutral-950" />
        </div>
      </div>
    </div>
  );
}
