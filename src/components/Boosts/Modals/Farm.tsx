import React, { FC } from "react";

import { useTrackedState } from "../../../context/store";
import { logAmplitudeEvent } from "../../../helpers/analytics";
import { Chip } from "../../Chip";
import { H3 } from "../../H3";
import { Label } from "../../Label";
import { LinkButton } from "../../LinkButton";
import { ModalWrapper } from "../styled";

const Farm: FC = () => {
  const { player, isWallet } = useTrackedState();

  return (
    <ModalWrapper>
      <Chip>2x boost</Chip>
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
        </>
      )}
      <LinkButton
        href={`https://verse.bitcoin.com/farms/eth/${
          isWallet ? "?origin=wallet" : ""
        }`}
        {...(isWallet
          ? {}
          : {
              target: "_blank",
              rel: "noreferrer",
            })}
        onClick={() => {
          logAmplitudeEvent({
            name: "verse clicker cta tapped",
            cta: "farm",
            to: `https://verse.bitcoin.com/farms/eth/${
              isWallet ? "?origin=wallet" : ""
            }`,
          });
        }}
      >
        Farm {player.verseHolder ? "more " : ""}VERSE
      </LinkButton>
      <LinkButton
        $design="secondary"
        href={`https://verse.bitcoin.com/staking/eth/verse/${
          isWallet ? "?origin=wallet" : ""
        }`}
        {...(isWallet
          ? {}
          : {
              target: "_blank",
              rel: "noreferrer",
            })}
        onClick={() => {
          logAmplitudeEvent({
            name: "verse clicker cta tapped",
            cta: "stake",
            to: `https://verse.bitcoin.com/staking/eth/verse/${
              isWallet ? "?origin=wallet" : ""
            }`,
          });
        }}
      >
        Stake {player.verseHolder ? "more " : ""}VERSE
      </LinkButton>
    </ModalWrapper>
  );
};

export default Farm;
