import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FacebookRounded,
  Search,
  Home,
  LiveTv,
  Storefront,
  Gamepad,
  Add,
  Chat,
  Notifications,
  ArrowDropDown,
} from "@mui/icons-material";

const Navbar = () => {
  return (
    <div className="grid grid-cols-12 justify-center items-center sticky top-0 z-[100] bg-[#252627] border-b-[1px] border-b-gray-700">
      {/* Group1 */}
      <div className="col-span-6 sm:col-span-3 flex justify-start gap-2 pl-4">
        <Link href="/">
          <FacebookRounded
            key="FBLogo"
            className="cursor-pointer text-[#4267B2] text-[2.5rem]"
          />
        </Link>
        <div className="flex justify-center items-center p-2 bg-[#4f4f4f] rounded-[2rem] gap-2">
          <Search key="Search" />
          <input
            type="text"
            placeholder="ค้นหาบน Facebook"
            className="bg-inherit outline-none hidden xl:flex placeholder-white"
          ></input>
        </div>
      </div>
      {/* Group2 */}
      <div className="col-span-6 hidden sm:flex justify-center">
        <Home key="Home" className="MIDDLE-ICONS MIDDLE-ICONS-ACTIVE" />
        <LiveTv key="TV" className="MIDDLE-ICONS" />
        <Storefront key="Store" className="MIDDLE-ICONS" />
        <Gamepad key="Game" className="MIDDLE-ICONS" />
      </div>
      {/* Group3 */}
      <div className="col-span-6 sm:col-span-3 flex justify-end items-center gap-2 pr-4">
        <div className="hidden lg:flex justify-center items-center rounded-[1rem] gap-2 text-[1.5rem] py-[0.25rem] px-[0.5rem] cursor-pointer hover:bg-[#5c5c5c]">
          <Image
            width={32}
            height={32}
            src="/profilepic.jpg"
            alt="profilepic"
            layout="fixed"
            className="rounded-full"
          />
          <div className="text-[1rem] font-[500]">Natthaphol</div>
        </div>
        <Add key="Add" className="OUTLINED-ICONS" />
        <Chat key="Chat" className="OUTLINED-ICONS" />
        <Notifications key="Notify" className="OUTLINED-ICONS" />
        <ArrowDropDown key="ArrDown" className="OUTLINED-ICONS" />
      </div>
    </div>
  );
};

export default Navbar;
