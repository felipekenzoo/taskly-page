import Image from "next/image";


export interface FeatureProps {
  source: string;
  title: string;
  description: string;
  reverse?: boolean;
}

export default function Feature({
  source,
  title,
  description,
  reverse = false,
}: FeatureProps) {
  return (
    <div
      className={`flex flex-col gap-4 items-center text-center mt-12
        lg:gap-12 lg:max-w-5xl lg:mx-auto lg:text-left
        ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}
    >
      <Image
        src={source}
        alt={title}
        width={592}
        height={592}
        quality={100}
        priority
        className="rounded-2xl"
      />

      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-semibold text-neutral-950 lg:text-4xl lg:max-w-xl">
          {title}
        </h3>
        <p className="lg:text-lg text-neutral-600">{description}</p>
        <a
          href="#"
          className="text-lg font-semibold text-indigo-500 lg:text-xl"
        >
          Ver mais
        </a>
      </div>
    </div>
  );
}
