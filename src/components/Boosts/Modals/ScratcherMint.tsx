import React, { FC } from "react";

import { useTrackedState } from "../../../context/store";
import { Chip } from "../../Chip";
import { H3 } from "../../H3";
import { LinkButton } from "../../LinkButton";
import { Text } from "../../Text";
import WarningChip from "../../WarningChip";
import { ModalWrapper } from "../styled";

const ScratcherMint: FC = () => {
  const { isWallet, player } = useTrackedState();
  const scratcherLink = `https://scratcher.verse.bitcoin.com/?campaign=lunar-new-year${
    isWallet ? "&origin=wallet" : ""
  }`;

  return (
    <ModalWrapper>
      <H3>Boost your points production by buying Verse Scratcher tickets</H3>
      <Chip>Your current multiplier: {player.productionBase * 100}%</Chip>
      <Text>
        You will receive a 1% increase to your production rate multiplier for
        every <b>Lunar New Year scratcher</b> ticket purchased
      </Text>
      <Text $secondary>
        NOTE: To receive a bonus, you must purchase with the same address used
        here
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

export default ScratcherMint;
