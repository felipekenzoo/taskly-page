"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ButtonPrimary from "../components/primarybutton";
import ButtonSecondary from "../components/secondarybutton";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between px-4 lg:px-16 lg:mx-28 mt-0 rounded-lg lg:rounded-2xl py-6 items-center shadow-md bg-white fixed top-0 left-0 right-0 z-50">
      <a href="#">
        <Image
          src="/logo-header.svg"
          alt="Logo Taskly"
          width={150}
          height={50}
          className="w-28 lg:w-36"
        />
      </a>

      <div className="hidden lg:flex items-center gap-8 text-gray-600 font-medium text-lg">
        <Link href="#" className="hover:text-indigo-500 transition-colors">
          Home
        </Link>
        <Link href="#features" className="hover:text-indigo-500 transition-colors">
          Recursos
        </Link>
        <Link href="#plans" className="hover:text-indigo-500 transition-colors">
          Planos
        </Link>
        <Link href="#testimonials" className="hover:text-indigo-500 transition-colors">
          Depoimentos
        </Link>
      </div>

      <div className="hidden lg:flex items-center gap-4">
        <ButtonPrimary title="Fazer login" href="#" />
        <ButtonSecondary title="Experimente grátis" href="#" />
      </div>

      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-600 focus:outline-none"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-8 lg:hidden border-t border-gray-100">
          <Link
            href="#features"
            onClick={toggleMenu}
            className="text-gray-600 font-medium text-lg hover:text-indigo-500 transition-colors"
          >
            Home
          </Link>
          <Link
            href="#"
            onClick={toggleMenu}
            className="text-gray-600 font-medium text-lg hover:text-indigo-500 transition-colors"
          >
            Recursos
          </Link>
          <Link
            href="#"
            onClick={toggleMenu}
            className="text-gray-600 font-medium text-lg hover:text-indigo-500 transition-colors"
          >
            Planos
          </Link>
          <Link
            href="#"
            onClick={toggleMenu}
            className="text-gray-600 font-medium text-lg hover:text-indigo-500 transition-colors"
          >
            Depoimentos
          </Link>

          <div className="flex flex-col items-center gap-4 mt-2 w-full px-6">
            <div className="w-full flex justify-center" onClick={toggleMenu}>
              <ButtonPrimary title="Fazer login" href="#" />
            </div>
            <div className="w-full flex justify-center" onClick={toggleMenu}>
              <ButtonSecondary title="Experimente grátis" href="#" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
