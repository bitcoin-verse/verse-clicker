import React from "react";

import { H3 } from "../../H3";
import { Label } from "../../Label";
import { LinkButton } from "../../LinkButton";

const After = () => {
  return (
    <>
      <H3>🏆 Clickmas Has Concluded! 🏆</H3>
      <Label $color="secondary">
        Thank you for participating in Clickmas! The event may be over, but the
        excitement continues. Check out the leaderboard to see where you stand.
        Prizes will be paid out in January.
      </Label>
      <LinkButton href="">🏅 See Leaderboard</LinkButton>
    </>
  );
};

export default After;
