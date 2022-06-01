import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
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
  People,
} from "@mui/icons-material";

const IconStyle = {
  cursor: "pointer",
  fontSize: "3rem",
  padding: "0.5rem",
  borderRadius: "1rem",
  width: "5vw",
  "&:hover": { backgroundColor: "#525252" },
};

const IconOutlinedStyle = {
  backgroundColor: "#4f4f4f",
  borderRadius: "50%",
  fontSize: "2.5rem",
  padding: "0.5rem",
  cursor: "pointer",
  "&:hover": { backgroundColor: "#5c5c5c" },
};

const Navbar = () => {
  return (
    <div className={styles.navBarContainer}>
      <div className={styles.group1}>
        <Link href="/">
          <FacebookRounded
            sx={{ cursor: "pointer", color: "#4267B2", fontSize: "2.5rem" }}
          />
        </Link>
        <Search sx={IconOutlinedStyle} />
      </div>
      <div className={styles.group2}>
        <Home sx={IconStyle} />
        <LiveTv sx={IconStyle} />
        <Storefront sx={IconStyle} />
        <Gamepad sx={IconStyle} />
      </div>
      <div className={styles.group3}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "1rem",
            gap: "0.5rem",
            fontSize: "1.5rem",
            padding: "0.25rem 0.5rem",
            cursor: "pointer",
            "&:hover": { backgroundColor: "#5c5c5c" },
          }}
        >
          <Image
            src="/profilepic.jpg"
            width="32px"
            height="32px"
            style={{ borderRadius: "50%" }}
          />
          <Typography>Natthaphol</Typography>
        </Box>
        <Add sx={IconOutlinedStyle} />
        <Chat sx={IconOutlinedStyle} />
        <Notifications sx={IconOutlinedStyle} />
        <ArrowDropDown sx={IconOutlinedStyle} />
      </div>
    </div>
  );
};

export default Navbar;
