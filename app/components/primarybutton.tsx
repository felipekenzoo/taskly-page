export interface ButtonSecondaryProps {
  title: string;
  href: string;
}

export default function ButtonSecondary({ title, href }: ButtonSecondaryProps) {
  return (
    <a
      href={href}
      className="px-2 py-2 border border-indigo-500 rounded-2xl text-md text-indigo-500 font-semibold lg:text-lg lg:px-4 lg:py-2
      hover:bg-indigo-500 hover:text-white hover:px-6
      transition-all duration-300 ease-in-out"
    >
      {title}
    </a>
  );
}
