import React, { FC } from "react";

import { useModal } from "../Modal";
import ReturningUser from "./ReturningUser";
import NewUser from "./NewUser";
import { Moon, StyledButton } from "./styled";
import verseMoon from "../../assets/verse-moon.png";

interface Props {
  returningUser?: boolean;
}

const Content: FC<Props> = ({ returningUser }) => {
  const { close } = useModal();

  return (
    <>
      <Moon src={verseMoon} />
      {returningUser ? <ReturningUser /> : <NewUser />}
      <StyledButton onClick={close}>Play</StyledButton>
    </>
  );
};

export default Content;
