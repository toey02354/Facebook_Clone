import React from "react";
import styles from "./RightSideBar.module.css";
import {
  Divider,
  List,
  ListSubheader,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const RightSideBar = () => {
  return (
    <div className={styles.container}>
      <List
        sx={{ width: "100%", bgcolor: "#1c1e21" }}
        subheader={
          <ListSubheader sx={{ bgcolor: "#1c1e21", color: "white" }}>
            ไม่ได้รับการสนับสนุน
          </ListSubheader>
        }
      ></List>
      <Divider sx={{ backgroundColor: "#5c5c5c" }} />
      <List
        sx={{ width: "100%", bgcolor: "#1c1e21" }}
        subheader={
          <ListSubheader sx={{ bgcolor: "#1c1e21", color: "white" }}>
            วันเกิด
          </ListSubheader>
        }
      ></List>
      <Divider sx={{ backgroundColor: "#5c5c5c" }} />
      <List
        sx={{ width: "100%", bgcolor: "#1c1e21" }}
        subheader={
          <ListSubheader sx={{ bgcolor: "#1c1e21", color: "white" }}>
            ผู้ติดต่อ
          </ListSubheader>
        }
      ></List>
    </div>
  );
};

export default RightSideBar;
