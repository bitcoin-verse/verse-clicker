import React, { FC } from "react";

import { useTrackedState } from "../../../context/store";
import { generateScratcherUrl } from "../../../helpers/links";
import { H3 } from "../../H3";
import { LinkButton } from "../../LinkButton";
import { Text } from "../../Text";
import WarningChip from "../../WarningChip";
import { Description, ModalWrapper } from "../styled";

const Scratcher: FC = () => {
  const { isWallet } = useTrackedState();
  const scratcherLink = generateScratcherUrl(isWallet);

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
      <WarningChip link="https://support.bitcoin.com/en/articles/8696947-verse-clicker-faq">
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
