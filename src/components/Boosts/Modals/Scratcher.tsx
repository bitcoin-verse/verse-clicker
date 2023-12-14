import React, { FC } from "react";

import { LinkButton } from "../../LinkButton";

import { Description, ModalWrapper } from "../styled";
import { H3 } from "../../H3";
import { Text } from "../../Text";
import { useTrackedState } from "../../../context/store";
import WarningChip from "../../WarningChip";

const Scratcher: FC = () => {
  const { isWallet } = useTrackedState();
  const scratcherLink = `https://scratcher.verse.bitcoin.com/${
    isWallet ? "?origin=wallet" : ""
  }`;

  return (
    <ModalWrapper>
      <H3>Boost your points production by playing Verse Scratcher</H3>
      <Description style={{ textAlign: "left" }}>
        1. Buy a ticket
        <br />
        2. Scratch
        <br />
        3. Claim your prize
      </Description>
      <Text>
        You will receive a one-time bonus equal to your current points
        production rate multiplied by your Scratch & Win prize amount
      </Text>
      <Text $secondary>
        NOTE: To receive a bonus you must
        <br />
        1. Purchase, scratch and claim with same address used here
        <br />
        2. Have a greater than zero production rate
      </Text>
      <WarningChip link="http://">
        Click here for detailed instructions
      </WarningChip>
      <LinkButton
        href={scratcherLink}
        {...(isWallet ? {} : { target: "_blank", rel: "noreferrer" })}
      >
        Scratch & Win
      </LinkButton>
    </ModalWrapper>
  );
};

export default Scratcher;
