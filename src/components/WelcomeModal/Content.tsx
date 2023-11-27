import React, { FC } from "react";

import ReturningUser from "./ReturningUser";
import NewUser from "./NewUser";
import { Moon, StyledButton } from "./styled";
import verseMoon from "../../assets/verse-moon.png";
import { useTrackedState } from "../../context/store";

interface Props {
  close: () => void;
}

const Content: FC<Props> = ({ close }) => {
  const { player } = useTrackedState();

  return (
    <>
      <Moon src={verseMoon} />
      {!!player.cookies ? <ReturningUser /> : <NewUser />}
      <StyledButton onClick={close}>Play</StyledButton>
    </>
  );
};

export default Content;
