import React, { FC } from "react";

import ReturningUser from "./ReturningUser";
import NewUser from "./NewUser";
import { Moon, StyledButton } from "./styled";
import verseMoon from "../../assets/verse-moon.png";

interface Props {
  close: () => void;
  returningUser?: boolean;
}

const Content: FC<Props> = ({ returningUser, close }) => {

  return (
    <>
      <Moon src={verseMoon} />
      {returningUser ? <ReturningUser /> : <NewUser />}
      <StyledButton onClick={close}>Play</StyledButton>
    </>
  );
};

export default Content;
