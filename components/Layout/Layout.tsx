import React from "react";
import styles from "./Layout.module.css";
import { Container, Box } from "@mui/material";

// Components
import Navbar from "../Navbar";
import { RightSideBar, LeftSideBar } from "../Sidebars";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.content}>
        <LeftSideBar />
        {children}
        <RightSideBar />
      </div>
    </div>
  );
};

export default Layout;
