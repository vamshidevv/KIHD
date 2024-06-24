import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
// import { DashBoard } from "../Components/DashBoard";
import ResponsiveDrawer from "../Components/Drawer";

export const Routes1 = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<ResponsiveDrawer />} />
      </Routes>
    </>
  );
};
