// components/layout/Header.tsx
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <nav className="flex space-x-6">
        <Link href="/home" className="hover:text-gray-300">
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-300">
          About
        </Link>
        <Link href="/posts" className="hover:text-gray-300">
          Posts
        </Link>
      </nav>
    </header>
  );
};

export default Header;

