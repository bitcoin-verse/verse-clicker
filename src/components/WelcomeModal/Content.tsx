import React, { FC } from "react";

import ReturningUser from "./ReturningUser";
import NewUser from "./NewUser";
import { Moon, StyledButton } from "./styled";
import { useTrackedState } from "../../context/store";
import { getMoonImage } from "../../helpers/getMoonImage";
import BonusContent from "./BonusContent";

interface Props {
  close: () => void;
}

const Content: FC<Props> = ({ close }) => {
  const { player, network, bonusData } = useTrackedState();

  return (
    <>
      <Moon src={getMoonImage(network)} />
      {bonusData ? (
        <BonusContent />
      ) : (
        <>
          {!!player.cookies ? <ReturningUser /> : <NewUser />}
          <StyledButton onClick={close}>Play</StyledButton>
        </>
      )}
    </>
  );
};

export default Content;
