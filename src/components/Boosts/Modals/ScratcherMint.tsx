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
      <H3>Boost your points production by playing Verse Scratcher</H3>
      <Chip>Current multiplier: {player.productionBase * 100}%</Chip>
      <Text>
        You will receive +1% production rate increase for every Luanr New Year
        scratcher ticket purchased
      </Text>
      <Text $secondary>
        NOTE: To receive a bonus you must
        <br />
        1. Purchase with same address used here
        <br />
        2. Scratch and claim
        <br />
        3. Have a greater than zero production rate
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

export default ScratcherMint;
