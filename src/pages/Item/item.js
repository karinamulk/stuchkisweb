import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useLocation } from "react-router-dom";


const MainWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-top: 104px;
  display: flex;
  justify-content: center;
`;


const Info = styled.p`
  margin: 0;
  color: var(--main-green);
  font-size: var(--text-h2-size);
  line-height: var(--text-h2-lineheight);
`;

const Item = () => {
  const location = useLocation();
  const reportData = location.state?.reportData;
  


  return (
    <MainWrapper>
        <Info>{reportData.item.date}</Info>     
    </MainWrapper>
  );
};
export default Item;