import React, { FC } from "react";

import { LinkButton } from "../../LinkButton";

import { Description, ModalWrapper } from "../styled";
import { useTrackedState } from "../../../context/store";
import { H3 } from "../../H3";
import { Chip } from "../../Chip";
import { Label } from "../../Label";

const Scratcher: FC = () => {
  const { player } = useTrackedState();

  return (
    <ModalWrapper>
      {player.bonus ? (
        <>
          <Chip>{player.cps * player.bonus} boost</Chip>
          <H3>You&#39;ve already won</H3>
          <Label $color="secondary">
            {player.cps * player.bonus}x boost applied to your clicks
          </Label>
        </>
      ) : (
        <>
          <H3>Boost your points production with Scratch & Win tickets</H3>
          <Description style={{ textAlign: "left" }}>
            1. Buy a ticket
            <br />
            2. Scratch the same number 3 times to win VERSE
            <br />
            3. Claim your prize
          </Description>
        </>
      )}
      <LinkButton href="https://scratcher.verse.bitcoin.com/" target="_blank">
        Scratch & Win {player.bonus && "more VERSE"}
      </LinkButton>
    </ModalWrapper>
  );
};

export default Scratcher;
