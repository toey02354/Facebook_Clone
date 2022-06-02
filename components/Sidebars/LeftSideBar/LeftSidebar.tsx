import React from "react";
import {
  People,
  GroupWork,
  WatchLater,
  StorefrontRounded,
  Bookmark,
} from "@mui/icons-material";
import {
  List,
  ListSubheader,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
} from "@mui/material";

const group1Items = [
  {
    icon: <Avatar src="/profilepic.jpg" className="h-[2rem] w-[2rem]" />,
    text: "Natthaphol Uthum",
  },
  {
    icon: <People />,
    text: "เพื่อน",
  },
  {
    icon: <WatchLater />,
    text: "ความทรงจำ",
  },
  {
    icon: <StorefrontRounded />,
    text: "MarketPlace",
  },
  {
    icon: <Bookmark />,
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
  return (
    <div className="w-[75%] flex flex-col justify-start p-4">
      <List className="w-full bg-[#1c1e21]">
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
        className="w-full bg-[#1c1e21]"
        subheader={
          <ListSubheader className="bg-inherit text-white">
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
      </List>
    </div>
  );
};

export default LeftSidebar;
