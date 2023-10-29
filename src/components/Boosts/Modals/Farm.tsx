import React, { FC } from "react";

import { Chip } from "../../Chip";
import { H3 } from "../../H3";
import { LinkButton } from "../../LinkButton";
import { Label } from "../../Label";

import { ModalWrapper } from "../styled";
import { useTrackedState } from "../../../context/store";

const Farm: FC = () => {
  const { player } = useTrackedState();

  return (
    <ModalWrapper>
      <Chip>10x boost</Chip>
      {player.isFarming || player.isStaking ? (
        <>
          <H3>You&#39;re currently farming and/or staking VERSE</H3>
          <Label $color="secondary">2x boost applied to point production</Label>
        </>
      ) : (
        <>
          <H3>You&#39;re currently not farming or staking any VERSE</H3>
          <Label $color="secondary">
            Farm or Stake VERSE to boost your point production
          </Label>
          <LinkButton
            href="https://verse.bitcoin.com/farms/eth/"
            target="_blank"
            rel="noreferrer"
          >
            Farm VERSE
          </LinkButton>
          <LinkButton
            $design="secondary"
            href="https://verse.bitcoin.com/staking/eth/verse/"
            target="_blank"
            rel="noreferrer"
          >
            Stake VERSE
          </LinkButton>
        </>
      )}
    </ModalWrapper>
  );
};

export default Farm;
