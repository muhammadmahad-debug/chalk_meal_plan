import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";

export const NavBar = () => {
  return (
    <nav className="fixed shadow-2xl border-b border-b-black w-full p-5 pl-10 bg-black z-10 top-0 animated drop-shadow-xl flex">
      <Link href="https://www.gymryan.com/">
        <Image src={logo} width={100} alt="Logo" />
      </Link>
    </nav>
  );
};
