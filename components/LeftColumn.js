import React from "react";
import Link from "next/link";
import Image from "next/image";
import appstore from "../public/appstore.png";
import googleplay from "../public/googleplay.png";

export const LeftColumn = () => {
  return (
    <div class="bg-[url('../public/ryan.webp')] bg-cover bg-top mt-16 inset-0 md:relative lg:w-1/2">
      <div className="hidden text-3xl text-white absolute bottom-8 left-8 lg:flex gap-2">
        <Link
          href="https://www.gymryan.com/"
          className="transition duration-300 hover:-translate-y-1"
        >
          <Image src={appstore} width={150} alt="Logo" />
        </Link>
        <Link
          href="https://www.gymryan.com/"
          className="transition duration-300 hover:-translate-y-1"
        >
          <Image src={googleplay} width={165} alt="Logo" />
        </Link>
      </div>
    </div>
  );
};
