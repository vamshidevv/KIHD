import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import SubmitTicket from "../Components/SubmitTicket";
import MyTickets from "../Components/MyTickets";
import DashboardCards from "../Components/DashboardCards";
import ViewTicketDetails from "../Components/ViewTicketDetails";

export const Routes1 = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<DashboardCards />} />
        <Route path="submitticket" element={<SubmitTicket />} />
        <Route path="mytickets" element={<MyTickets />} />
        <Route path="viewticketdetails" element={<ViewTicketDetails />} />
      </Routes>
    </>
  );
};
