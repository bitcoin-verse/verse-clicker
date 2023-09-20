import React, { FC } from "react";
import Shop from "../Shop";

import Display from "./Display";
import Cookie from "./Cookie";
import styled from "styled-components";

const StyledGameBoard = styled.section`
  position: relative;
  flex: 1;
`;

const GameBoard: FC = () => {
  return (
    <StyledGameBoard>
      <Display />
      <Cookie />
      <Shop />
    </StyledGameBoard>
  );
};

export default GameBoard;
