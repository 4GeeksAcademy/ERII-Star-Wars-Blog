import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../views/HomePage.jsx";
import DetailPage from "../views/DetailPage.jsx";
import ErrorPage from "../views/ErrorPage.jsx";

import Navbar from "../components/Navbar";

const Router = () => {
  return (
    <BrowserRouter basename="">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:uid" element={<DetailPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
