import React from "react";
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
    <div className="w-[75%] flex flex-col justify-start p-4">
      <List
        className="w-full bg-[#1c1e21]"
        subheader={
          <ListSubheader className="bg-inherit text-white">
            ไม่ได้รับการสนับสนุน
          </ListSubheader>
        }
      ></List>
      <Divider className="bg-[#5c5c5c]" />
      <List
        className="w-full bg-[#1c1e21]"
        subheader={
          <ListSubheader className="bg-inherit text-white">
            วันเกิด
          </ListSubheader>
        }
      ></List>
      <Divider className="bg-[#5c5c5c]" />
      <List
        className="w-full bg-[#1c1e21]"
        subheader={
          <ListSubheader className="bg-inherit text-white">
            ผู้ติดต่อ
          </ListSubheader>
        }
      ></List>
    </div>
  );
};

export default RightSideBar;
