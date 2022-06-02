import React from "react";
import Link from "next/link";
import { Avatar } from "@mui/material";
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
    <div className="grid grid-cols-12 p-3 bg-[#252627] border-b-2 border-b-gray-700">
      <div className="col-span-3 flex justify-start gap-2">
        <Link href="/">
          <FacebookRounded
            key="FBLogo"
            className="cursor-pointer text-[#4267B2] text-[2.75rem]"
          />
        </Link>
        <Search key="Search" className="OUTLINED-ICONS" />
      </div>
      <div className="col-span-6 flex justify-center">
        <Home key="Home" className="MIDDLE-ICONS MIDDLE-ICONS-ACTIVE" />
        <LiveTv key="TV" className="MIDDLE-ICONS" />
        <Storefront key="Store" className="MIDDLE-ICONS" />
        <Gamepad key="Game" className="MIDDLE-ICONS" />
      </div>
      <div className="col-span-3 flex justify-end gap-2">
        <div className="flex justify-center items-center rounded-[1rem] gap-2 text-[1.5rem] py-[0.25rem] px-[0.5rem] cursor-pointer hover:bg-[#5c5c5c]">
          <Avatar
            className="h-[2rem] w-[2rem]"
            src="/profilepic.jpg"
            alt="profilepic"
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
