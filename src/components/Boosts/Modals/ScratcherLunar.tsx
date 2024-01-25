import React, { FC } from "react";

import { useTrackedState } from "../../../context/store";
import { generateScratcherUrl } from "../../../helpers/links";
import { H3 } from "../../H3";
import LinkButton from "../../LinkButton";
import { Text } from "../../Text";
import WarningChip from "../../WarningChip";
import { Description, ModalWrapper } from "../styled";

const ScratcherLunar: FC = () => {
  const { isWallet } = useTrackedState();
  const scratcherLink = generateScratcherUrl(isWallet, "lunar-new-year");

  return (
    <ModalWrapper>
      <H3>
        Get instant bonus points by claiming Lunar New Year Scratcher prizes
      </H3>
      <Description style={{ textAlign: "left" }}>
        1. Buy a <b>Lunar New Year</b> scratcher ticket
        <br />
        2. Scratch
        <br />
        3. Claim your prize
      </Description>
      <Text>
        When you claim your Lunar New Year Scratcher prize, you will receive a
        one-time bonus based on your prize amount
        <br />
        <br />
        (Clicker bonus = √prize * 100 * production rate)
      </Text>
      <Text $secondary>
        NOTE: To receive a bonus, you must:
        <br />
        1. Purchase, scratch, & claim using the same address used here
        <br />
        2. Scratcher purchased must be a Lunar New Year Scratcher
        <br />
        3. Have a greater than zero production rate
      </Text>
      <WarningChip link="https://support.bitcoin.com/en/articles/8829750-verse-clicker-lunar-new-year-contest-faq">
        Tap here for detailed instructions
      </WarningChip>
      <LinkButton href={scratcherLink} newTab={!isWallet}>
        Scratch & Win
      </LinkButton>
    </ModalWrapper>
  );
};

export default ScratcherLunar;
