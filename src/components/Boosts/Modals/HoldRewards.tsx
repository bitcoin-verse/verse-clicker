import React, { FC } from "react";

import { useTrackedState } from "../../../context/store";
import { logAmplitudeEvent } from "../../../helpers/analytics";
import { generateBuyUrl, generateSwapUrl } from "../../../helpers/links";
import { Chip } from "../../Chip";
import { H3 } from "../../H3";
import { Label } from "../../Label";
import LinkButton from "../../LinkButton";
import { ModalWrapper } from "../styled";

const HoldRewards: FC = () => {
  const { player, isWallet } = useTrackedState();

  return (
    <ModalWrapper>
      <Chip>boost</Chip>
      {player.verseHolder ? (
        <>
          <H3>You&#39;re currently holding VERSE</H3>
          <Label $color="secondary">The more you hold, the greater your power!</Label>
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
        href={generateBuyUrl(isWallet, "verse")}
        newTab={!isWallet}
        onClick={() => {
          logAmplitudeEvent({
            name: "verse clicker cta tapped",
            cta: "buy",
            to: generateBuyUrl(isWallet, "verse"),
          });
        }}
      >
        Buy {player.verseHolder ? "more " : ""}VERSE
      </LinkButton>
      <LinkButton
        design="secondary"
        href={generateSwapUrl(isWallet, "verse")}
        newTab={!isWallet}
        onClick={() => {
          logAmplitudeEvent({
            name: "verse clicker cta tapped",
            cta: "swap",
            to: generateSwapUrl(isWallet, "verse"),
          });
        }}
      >
        Swap {player.verseHolder ? "more " : ""}VERSE
      </LinkButton>
    </ModalWrapper>
  );
};

export default HoldRewards;
