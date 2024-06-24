import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import { DashBoard } from "../Components/DashBoard";

export const Routes1 = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<DashBoard />} />
      </Routes>
    </>
  );
};
