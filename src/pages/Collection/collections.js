import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const RowWrapper = styled.div`
  display: flex;
`;
const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Collections = () => {
 
  return (
    <MainWrapper>
      <p>Collections</p>
    </MainWrapper>
  );
};
export default Collections;
