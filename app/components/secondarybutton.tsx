export interface ButtonSecondaryProps {
  title: string;
  href: string;
}

export default function ButtonSecondary({ title, href }: ButtonSecondaryProps) {
  return (
    <a
      href={href}
      className="px-2 py-2 border bg-violet-500 border-violet-300 rounded-2xl text-md text-white font-semibold lg:text-lg lg:px-4 lg:py-3
      hover:bg-violet-600 hover:text-white hover:px-6
      transition-all duration-300 ease-in-out"
    >
      {title}
    </a>
  );
}
