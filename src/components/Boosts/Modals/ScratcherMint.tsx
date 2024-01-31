import React, { FC } from "react";

import { useTrackedState } from "../../../context/store";
import { generateScratcherUrl } from "../../../helpers/links";
import { Chip } from "../../Chip";
import { H3 } from "../../H3";
import LinkButton from "../../LinkButton";
import { Text } from "../../Text";
import WarningChip from "../../WarningChip";
import { ModalWrapper } from "../styled";

const ScratcherMint: FC = () => {
  const { isWallet, player } = useTrackedState();
  const scratcherLink = generateScratcherUrl(isWallet, "lunar-new-year");

  return (
    <ModalWrapper>
      <H3>
        Boost your points production by buying Lunar New Year Scratcher tickets
      </H3>
      <Chip>Your current multiplier: {player.productionBase * 100}%</Chip>
      <Text>
        You will receive a 1% increase to your production rate multiplier for
        every <b>Lunar New Year Scratcher</b> ticket purchased
      </Text>
      <Text $secondary>
        NOTE: To receive a bonus, you must:
        <br />
        1. Purchase using the same address used here
        <br />
        2. Scratcher purchased must be a Lunar New Year Scratcher
      </Text>
      <WarningChip link="https://support.bitcoin.com/en/articles/8889148-verse-clicker-lunar-new-year-contest">
        Tap here for detailed instructions
      </WarningChip>

      <LinkButton href={scratcherLink} newTab={!isWallet}>
        Scratch & Win
      </LinkButton>
    </ModalWrapper>
  );
};

export default ScratcherMint;
