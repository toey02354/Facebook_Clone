import React, { useState } from "react";
import Image from "next/image";
import {
  People,
  GroupWork,
  WatchLater,
  StorefrontRounded,
  Bookmark,
  ArrowDropDown,
  ArrowDropUp,
} from "@mui/icons-material";
import {
  List,
  ListSubheader,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";

const group1Items = [
  {
    icon: (
      <Image
        width={32}
        height={32}
        src="/profilepic.jpg"
        alt="profilepic"
        layout="fixed"
        className="rounded-full"
      />
    ),
    text: "Natthaphol Uthumphirat",
  },
  {
    icon: <People className="text-sky-500" />,
    text: "เพื่อน",
  },
  {
    icon: <WatchLater className="text-yellow-100" />,
    text: "ความทรงจำ",
  },
  {
    icon: <StorefrontRounded className="text-sky-500" />,
    text: "MarketPlace",
  },
  {
    icon: <Bookmark className="text-purple-700" />,
    text: "ที่บันทึกไว้",
  },
];
const group2Items = [
  {
    icon: <GroupWork />,
    text: "กลุ่ม1",
  },
  {
    icon: <GroupWork />,
    text: "กลุ่ม2",
  },
  {
    icon: <GroupWork />,
    text: "กลุ่ม3",
  },
  {
    icon: <GroupWork />,
    text: "กลุ่ม4",
  },
];

const LeftSidebar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleClick = () => {
    setOpen((curr) => !curr);
  };

  return (
    <div className="w-[75%] flex flex-col justify-start p-4">
      <List className="w-full">
        {group1Items.map((item, index) => (
          <ListItemButton
            key={index}
            className="rounded-2xl hover:bg-[#5c5c5c]"
          >
            <ListItemIcon className="text-white">{item.icon}</ListItemIcon>
            <ListItemText>{item.text}</ListItemText>
          </ListItemButton>
        ))}
      </List>
      <Divider className="bg-[#5c5c5c]" />
      <List
        className="w-full"
        subheader={
          <ListSubheader className="bg-inherit text-white static font-bold">
            ทางลัดของคุณ
          </ListSubheader>
        }
      >
        {group2Items.map((item, index) => (
          <ListItemButton
            key={index}
            className="rounded-2xl hover:bg-[#5c5c5c]"
          >
            <ListItemIcon className="text-white">{item.icon}</ListItemIcon>
            <ListItemText>{item.text}</ListItemText>
          </ListItemButton>
        ))}
        <ListItemButton
          key="more"
          onClick={handleClick}
          className="rounded-2xl hover:bg-[#5c5c5c]"
        >
          <ListItemIcon className="text-white">
            {open ? (
              <ArrowDropUp className="bg-[#252627] rounded-full text-[2rem]" />
            ) : (
              <ArrowDropDown className="bg-[#252627] rounded-full text-[2rem]" />
            )}
          </ListItemIcon>
          <ListItemText>ดูเพิ่มเติม</ListItemText>
        </ListItemButton>
      </List>
    </div>
  );
};

export default LeftSidebar;
