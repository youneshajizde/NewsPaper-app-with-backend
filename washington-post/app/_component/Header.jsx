import React from "react";
import logo from "../_images/logo.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Search } from "lucide-react";
import avatar from "../_images/avatar.jpg";
import Link from "next/link";

function Header() {
  return (
    <section className="w-[94%] mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
      <div className="flex flex-col items-center md:items-start justify-between md:justify-center order-2 md:order-1">
        <h1 className="font-playfair font-bold text-2xl italic text-center md:text-left">
          SUPPORT THE GUARDIAN
        </h1>
        <p className="text-xs text-gray-400 mt-2 text-center md:text-left">
          Fearless, Independent, Reader-funded
        </p>
        <Button className="w-40 bg-transparent rounded-full border border-gray-900 mt-10 flex items-center gap-1 hover:bg-black hover:text-white">
          Support us <ArrowUpRight className="w-5" />
        </Button>
      </div>
      <div className="flex justify-center order-1 md:order-2">
        <Link href={"/"}>
          <Image width={400} height={400} src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="flex justify-end items-center gap-3 order-3 md:order-3">
        <Search />
        <Image
          width={50}
          height={50}
          src={avatar}
          className="rounded-full p-[1px] bg-black"
          alt="Avatar"
        />
      </div>
    </section>
  );
}

export default Header;
