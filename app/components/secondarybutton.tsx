export interface ButtonSecondaryProps {
  title: string;
  href: string;
}

export default function ButtonSecondary({ title, href }: ButtonSecondaryProps) {
  return (
    <a
      href={href}
      className="px-2 py-2 border bg-indigo-500 border-indigo-300 rounded-2xl text-md text-white font-semibold lg:text-lg lg:px-4 lg:py-3
      hover:bg-indigo-600 hover:text-white hover:px-6
      transition-all duration-300 ease-in-out"
    >
      {title}
    </a>
  );
}
