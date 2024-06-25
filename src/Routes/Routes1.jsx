import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
// import { DashBoard } from "../Components/DashBoard";
import ResponsiveDrawer from "../Components/Drawer";
import SubmitTicket from "../Components/SubmitTicket";
import MyTickets from "../Components/MyTickets";
import DashboardCards from "../Components/DashboardCards";

export const Routes1 = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<DashboardCards />} />
        <Route path="submitticket" element={<SubmitTicket />} />
        <Route path="mytickets" element={<MyTickets />} />
      </Routes>
    </>
  );
};
