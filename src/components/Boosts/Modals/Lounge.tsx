import React, { FC } from "react";
import {
  GUILD_URL,
  VERSE_LOUNGE_URL,
  VERSE_MARKETS_DEEPLINK,
} from "src/constants";

import { useTrackedState } from "../../../context/store";
import { logAmplitudeEvent } from "../../../helpers/analytics";
import { H3 } from "../../H3";
import { Label } from "../../Label";
import LinkButton from "../../LinkButton";
import { ModalWrapper } from "../styled";

interface Props {
  close: () => void;
}
const Lounge: FC<Props> = ({ close }) => {
  const { player } = useTrackedState();

  return (
    <ModalWrapper>
      {player.isGuildMember ? (
        <>
          <H3>You are a certified Verse Lounge member</H3>
          <Label $color="secondary">
            Congratulations, you have access to all the tools!
          </Label>
          <LinkButton
            href={VERSE_LOUNGE_URL}
            newTab
            onClick={() => {
              logAmplitudeEvent({
                name: "verse clicker cta tapped",
                cta: "lounge",
                to: VERSE_LOUNGE_URL,
              });
            }}
          >
            Go to Lounge
          </LinkButton>
          <LinkButton design="secondary" onClick={close}>
            Back to game
          </LinkButton>
        </>
      ) : (
        <>
          <H3>You are not currently a Verse Lounge member</H3>
          <Label $color="secondary">
            By joining Verse Lounge, you&#39;ll get instant access to all
            in-game tools!
          </Label>
          <LinkButton
            href={GUILD_URL}
            newTab
            onClick={() => {
              logAmplitudeEvent({
                name: "verse clicker cta tapped",
                cta: "guild",
                to: GUILD_URL,
              });
            }}
          >
            Become a Verse Lounge Member
          </LinkButton>
        </>
      )}
    </ModalWrapper>
  );
};

export default Lounge;
