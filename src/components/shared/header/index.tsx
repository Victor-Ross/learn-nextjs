import Link from "next/link";
import Image from "next/image";
import { MenuIcon } from "lucide-react";

import { APP_NAME } from "@/lib/constants";
import data from "@/lib/data";

import Menu from "./menu";
import Search from "./search";

import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="text-white bg-black">
      <div className="px-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              className="flex items-center header-button font-extrabold text-2xl m-1"
              href="/"
            >
              <Image
                src="/icons/logo.svg"
                width={40}
                height={40}
                alt={`${APP_NAME} logo`}
              />
              {APP_NAME}
            </Link>
          </div>
          <div className="hidden md:block flex-1 max-w-xl">
            <Search />
          </div>
          <Menu />
        </div>
        <div className="md:hidden block py-2">
          <Search />
        </div>
      </div>
      <div className="flex items-center px-3 mb-[1px] bg-gray-800">
        <Button
          className="header-button flex items-center gap-1 text-base [&_svg]:size-6 hover:bg-gray-800 hover:text-white"
          variant="ghost"
        >
          <MenuIcon />
          All
        </Button>
        <div className="flex items-center flex-wrap gap-3 overflow-hidden max-h-[42px]">
          {data.headerMenus.map((menu) => (
            <Link
              href={menu.href}
              key={menu.href}
              className="header-button !p-2 "
            >
              {menu.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
