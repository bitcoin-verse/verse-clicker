import React, { FC } from "react";

import ReturningUser from "./ReturningUser";
import NewUser from "./NewUser";
import { Moon, StyledButton } from "./styled";
import { useTrackedState } from "../../context/store";
import BonusContent from "./BonusContent";
import { useTheme } from "styled-components";

interface Props {
  close: () => void;
  sidebar?: boolean;
}

const Content: FC<Props> = ({ close, sidebar }) => {
  const { player, bonusData } = useTrackedState();
  const { moon } = useTheme();

  return (
    <>
      <Moon src={moon} />
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
