export interface ButtonPrimaryProps {
  title: string;
  href: string;
}

export default function ButtonPrimary({ title, href }: ButtonPrimaryProps) {
  return (
    <a
      href={href}
      className="px-2 py-2 border border-violet-500 rounded-2xl text-md text-violet-500 font-semibold lg:text-lg lg:px-4 lg:py-3
      hover:bg-violet-500 hover:text-white hover:px-6
      transition-all duration-300 ease-in-out"
    >
      {title}
    </a>
  );
}
