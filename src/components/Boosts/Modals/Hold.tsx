import React, { FC } from "react";

import { Chip } from "../../Chip";
import { H3 } from "../../H3";
import { LinkButton } from "../../LinkButton";
import { Label } from "../../Label";

import { ModalWrapper } from "../styled";
import { useTrackedState } from "../../../context/store";
import { logAmplitudeEvent } from "../../../helpers/analytics";

const Hold: FC = () => {
  const { player, isWallet } = useTrackedState();

  return (
    <ModalWrapper>
      <Chip>10x boost</Chip>
      {player.verseHolder ? (
        <>
          <H3>You&#39;re currently holding VERSE</H3>
          <Label $color="secondary">10x boost applied to your clicks</Label>
        </>
      ) : (
        <>
          <H3>You&#39;re currently not holding any VERSE</H3>
          <Label $color="secondary">
            Buy or Swap VERSE to boost your point production
          </Label>
        </>
      )}
      <LinkButton
        href={`https://buy.bitcoin.com/verse/${
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
            name: "Verse Clicker CTA tapped",
            cta: "farm",
            to: "https://buy.bitcoin.com/verse",
          });
        }}
      >
        Buy {player.verseHolder ? "more " : ""}VERSE
      </LinkButton>
      <LinkButton
        $design="secondary"
        href={`https://verse.bitcoin.com/swap/?coin=verse${
          isWallet ? "&origin=wallet" : ""
        }`}
        {...(isWallet
          ? {}
          : {
              target: "_blank",
              rel: "noreferrer",
            })}
      >
        Swap {player.verseHolder ? "more " : ""}VERSE
      </LinkButton>
    </ModalWrapper>
  );
};

export default Hold;
