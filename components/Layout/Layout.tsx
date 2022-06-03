import React from "react";

// Components
import Navbar from "../Navbar";
import { RightSideBar, LeftSideBar } from "../Sidebars";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="grid grid-cols-12">
        <div className="col-span-3 hidden lg:flex justify-start">
          <LeftSideBar />
        </div>
        <div className="col-span-12 lg:col-span-6 flex justify-center">
          {children}
        </div>
        <div className="col-span-3 hidden lg:flex justify-end">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
