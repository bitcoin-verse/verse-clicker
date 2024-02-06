import React, { FC } from "react";

import { useTrackedState } from "../../../context/store";
import { logAmplitudeEvent } from "../../../helpers/analytics";
import { generateSwapUrl } from "../../../helpers/links";
import { Chip } from "../../Chip";
import { H3 } from "../../H3";
import { Label } from "../../Label";
import LinkButton from "../../LinkButton";
import { ModalWrapper } from "../styled";

interface Props {
  rate: number;
}

const HoldLunar: FC<Props> = ({ rate }) => {
  const { player, isWallet } = useTrackedState();

  return (
    <ModalWrapper>
      <Chip>{rate}x boost</Chip>
      {player.verseHolder ? (
        <>
          <H3>You&#39;re currently holding VERSE</H3>
          <Label $color="secondary">{rate}x boost applied to your clicks</Label>
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
        href="https://wallet.polygon.technology/polygon/bridge/deposit"
        newTab
        onClick={() => {
          logAmplitudeEvent({
            name: "verse clicker cta tapped",
            cta: "bridge",
            to: "https://wallet.polygon.technology/polygon/bridge/deposit",
          });
        }}
      >
        Bridge VERSE to Polygon
      </LinkButton>
      <LinkButton
        design="secondary"
        href={generateSwapUrl(isWallet, "fxVerse")}
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

export default HoldLunar;
