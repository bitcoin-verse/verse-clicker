import React, { FC } from "react";

import ReturningUser from "./ReturningUser";
import NewUser from "./NewUser";
import { Moon, StyledButton } from "./styled";
import { useTrackedState } from "../../context/store";
import { getMoonImage } from "../../helpers/getMoonImage";
import BonusContent from "./BonusContent";

interface Props {
  close: () => void;
  sidebar?: boolean;
}

const Content: FC<Props> = ({ close, sidebar }) => {
  const { player, network, bonusData } = useTrackedState();

  return (
    <>
      <Moon src={getMoonImage(network)} />
      {bonusData ? (
        <BonusContent />
      ) : (
        <>
          {sidebar ? (
            <NewUser />
          ) : (
            <>{player.cookies ? <ReturningUser /> : <NewUser />}</>
          )}
          <StyledButton onClick={close}>Play</StyledButton>
        </>
      )}
    </>
  );
};

export default Content;
