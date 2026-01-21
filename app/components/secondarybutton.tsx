export interface ButtonPrimaryProps {
  title: string;
  href: string;
}

export default function ButtonPrimary({ title, href }: ButtonPrimaryProps) {
  return (
    <a
      href={href}
      className="px-2 py-2 border bg-indigo-500 border-indigo-400 rounded-2xl text-md text-white font-semibold lg:text-lg lg:px-4 lg:py-2
      hover:bg-indigo-600 hover:border-indigo-500 hover:text-white hover:px-6
      transition-all duration-300 ease-in-out"
    >
      {title}
    </a>
  );
}
