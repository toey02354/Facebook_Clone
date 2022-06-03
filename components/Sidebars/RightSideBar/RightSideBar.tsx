import React, { useState } from "react";
import Image from "next/image";
import {
  Divider,
  List,
  ListSubheader,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  CardGiftcardOutlined,
  VideoCall,
  Search,
  MoreHoriz,
  ArrowDropDown,
  ArrowDropUp,
} from "@mui/icons-material";

const RightSideBar = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen((curr) => !curr);
  };

  return (
    <div className="w-[75%] flex flex-col justify-start p-4">
      <List
        className="w-full bg-[#1c1e21]"
        subheader={
          <ListSubheader className="bg-inherit text-white text-base leading-[3rem] font-bold">
            ไม่ได้รับการสนับสนุน
          </ListSubheader>
        }
      ></List>
      <Divider className="bg-[#5c5c5c]" />
      <List
        className="w-full bg-[#1c1e21]"
        subheader={
          <ListSubheader className="bg-inherit text-white text-base leading-[3rem] font-bold">
            วันเกิด
          </ListSubheader>
        }
      >
        <div className="flex flex-row items-center">
          <CardGiftcardOutlined className="mx-4 text-[2rem] text-sky-400" />
          <p>วันนี้ไม่ใช่วันเกิดของผม</p>
        </div>
      </List>
      <Divider className="bg-[#5c5c5c]" />
      <List
        className="w-full bg-[#1c1e21]"
        subheader={
          <ListSubheader className="flex flex-row justify-between bg-inherit text-white text-base leading-[3rem] font-bold">
            <p>ผู้ติดต่อ</p>
            <div className="flex gap-4 items-center">
              <VideoCall />
              <Search />
              <MoreHoriz />
            </div>
          </ListSubheader>
        }
      >
        <button
          className="w-full flex justify-center bg-[#252627] p-2 rounded-2xl"
          onClick={handleClick}
        >
          ดูทั้งหมด (0) {open ? <ArrowDropUp /> : <ArrowDropDown />}
        </button>
        <div className={open ? `flex flex-col mt-4 gap-4` : `hidden`}>
          <div className="flex flex-row gap-3">
            <Image
              width={32}
              height={32}
              src="/profilepic.jpg"
              alt="profilepic"
              layout="fixed"
              className="rounded-full"
            />
            <pre>Natthaphol Uthumphirat</pre>
          </div>
          <div className="flex flex-row gap-3">
            <Image
              width={32}
              height={32}
              src="/profilepic.jpg"
              alt="profilepic"
              layout="fixed"
              className="rounded-full"
            />
            <pre>Natthaphol Uthumphirat</pre>
          </div>
        </div>
      </List>
    </div>
  );
};

export default RightSideBar;
