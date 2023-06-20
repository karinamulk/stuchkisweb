import { useEffect, useState } from "react";
import styled from "styled-components";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer/M_Footer";
import Navbar from "../components/Navbar/M_Navbar";
import "../index.css";

const MainWrapper = styled.div`
  min-height: 98vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default function Root() {
  const currentUrl = window.location.href;
  console.log(currentUrl);
  return (
    <>
      <MainWrapper>
        {currentUrl !== "http://localhost:8080/rules" && <Navbar />}

        <Outlet />
        <Footer />
      </MainWrapper>
    </>
  );
}
