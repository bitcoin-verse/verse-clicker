import React, { FC } from "react";
import Shop from "../Shop";

import Display from "./Display";
import Cookie from "./Cookie";

const GameBoard: FC = () => {
  return (
    <>
      <Display />
      <Cookie />
      <Shop />
    </>
  );
};

export default GameBoard;
