import React, { FC } from "react";

import { useTrackedState } from "../../../context/store";
import { H3 } from "../../H3";
import { LinkButton } from "../../LinkButton";
import { Text } from "../../Text";
import WarningChip from "../../WarningChip";
import { Description, ModalWrapper } from "../styled";

const ScratcherLunar: FC = () => {
  const { isWallet } = useTrackedState();
  const scratcherLink = `https://scratcher.verse.bitcoin.com/?campaign=lunar-new-year${
    isWallet ? "&origin=wallet" : ""
  }`;

  return (
    <ModalWrapper>
      <H3>Boost your points production by playing Verse Scratcher</H3>
      <Description style={{ textAlign: "left" }}>
        1. Buy a <b>Lunar New Year</b> ticket
        <br />
        2. Scratch
        <br />
        3. Claim your prize
      </Description>
      <Text>
        When you claim your Verse Scratcher prize, you will receive a one-time
        bonus equal to the square root of 100 times your current points
        production rate multiplied by your Scratcher prize amount (Clicker bonus
        = √win amount * 100 * production rate)
      </Text>
      <Text $secondary>
        NOTE: To receive a bonus, you must:
        <br />
        1. Purchase, scratch, and claim using the same address used here
        <br />
        2. Have a great than zero production rate
      </Text>
      <WarningChip link="https://support.bitcoin.com/en/articles/8696947-verse-clicker-faq">
        Tap here for detailed instructions
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

export default ScratcherLunar;
