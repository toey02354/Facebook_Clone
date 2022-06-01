import React from "react";
import styles from "./LeftSideBar.module.css";
import Image from "next/image";
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
} from "@mui/material";

const group1Items = [
  {
    icon: (
      <Image
        src="/profilepic.jpg"
        width="32px"
        height="32px"
        style={{ borderRadius: "50%" }}
      />
    ),
    text: "Natthaphol Uthum",
  },
  {
    icon: <People sx={{ color: "white" }} />,
    text: "เพื่อน",
  },
  {
    icon: <WatchLater sx={{ color: "white" }} />,
    text: "ความทรงจำ",
  },
  {
    icon: <StorefrontRounded sx={{ color: "white" }} />,
    text: "MarketPlace",
  },
  {
    icon: <Bookmark sx={{ color: "white" }} />,
    text: "ที่บันทึกไว้",
  },
];
const group2Items = [
  {
    icon: <GroupWork sx={{ color: "white" }} />,
    text: "กลุ่ม1",
  },
  {
    icon: <GroupWork sx={{ color: "white" }} />,
    text: "กลุ่ม2",
  },
  {
    icon: <GroupWork sx={{ color: "white" }} />,
    text: "กลุ่ม3",
  },
  {
    icon: <GroupWork sx={{ color: "white" }} />,
    text: "กลุ่ม4",
  },
];

const LeftSidebar = () => {
  return (
    <div className={styles.container}>
      <List sx={{ width: "100%", bgcolor: "#1c1e21" }}>
        {group1Items.map((item, index) => (
          <ListItemButton
            key={`${item.text} ${index}`}
            sx={{
              borderRadius: "1rem",
              "&:hover": { backgroundColor: "#5c5c5c" },
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.text}</ListItemText>
          </ListItemButton>
        ))}
      </List>
      <Divider sx={{ backgroundColor: "#5c5c5c" }} />
      <List
        sx={{ width: "100%", bgcolor: "#1c1e21" }}
        subheader={
          <ListSubheader sx={{ bgcolor: "#1c1e21", color: "white" }}>
            ทางลัดของคุณ
          </ListSubheader>
        }
      >
        {group2Items.map((item, index) => (
          <ListItemButton
            key={`${item.text} ${index}`}
            sx={{
              borderRadius: "1rem",
              "&:hover": { backgroundColor: "#5c5c5c" },
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.text}</ListItemText>
          </ListItemButton>
        ))}
      </List>
    </div>
  );
};

export default LeftSidebar;
