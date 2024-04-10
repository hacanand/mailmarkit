

import Link from "next/link";
import { Logo, OnlyLogo } from "./logo";
import NavItems from "./nav.items";
import Toolbar from "./toolbar";
//import Banner from "@/modules/home/elements/banner";

const Header = () => {
  return (
    <>
      <div className="w-full backdrop-blur-sm sticky top-0 left-0 z-[999] border-b border-b[#000] px-10 flex items-center justify-between h-[80px] bg-white  text-black ">
        <div>
          <Link href={"/"} className="max-md:hidden">
            <Logo />
          </Link>
          <Link href={"/"} className="md:hidden">
            <OnlyLogo />
          </Link>
        </div>
        <div>
          <NavItems />
        </div>
        <div className="flex items-center gap-3">
          <Toolbar />
        </div>
      </div>
    </>
  );
};

export default Header;