import { Quote } from "lucide-react";
import Image from "next/image";

export interface TestimonialProps {
  name: string;
  role: string;
  photo: string;
  testimonial: string;
}

export default function CardTestimonial({
  name,
  role,
  photo,
  testimonial,
}: TestimonialProps) {
  return (
    <div className="w-full max-w-sm h-80 bg-white border border-neutral-200 rounded-3xl shadow-sm p-6 flex flex-col justify-between text-center">
      <div>
        <Quote className="text-indigo-500 mb-4" size={40} fill="currentColor" />
        <p className="text-neutral-700 mb-4 text-left">{`"${testimonial}"`}</p>
      </div>
      <div className="flex items-center text-left gap-3 mb-4">
        <Image
          src={photo}
          alt={name}
          width={64}
          height={64}
          className="rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="text-neutral-900 text-xl font-semibold">{name}</h3>
          <p className="text-neutral-500">{role}</p>
        </div>
      </div>
    </div>
  );
}
