import React from "react";
import styles from "./Layout.module.css";
import { Container, Box, Grid } from "@mui/material";

// Components
import Navbar from "../Navbar";
import { RightSideBar, LeftSideBar } from "../Sidebars";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      {/* <div className={styles.content}>
        <LeftSideBar />
        {children}
        <RightSideBar />
      </div> */}
      <Grid container>
        <Grid item xs={3} display="flex" justifyContent="flex-start">
          <LeftSideBar />
        </Grid>
        <Grid item xs={6} display="flex" justifyContent="center">
          {children}
        </Grid>
        <Grid item xs={3} display="flex" justifyContent="flex-end">
          <RightSideBar />
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
