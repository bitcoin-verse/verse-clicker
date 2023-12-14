import React from "react";

import { H3 } from "../../H3";
import { Label } from "../../Label";
import { LinkButton } from "../../LinkButton";

const Before = () => {
  return (
    <>
      <H3>🌟 Clickmas is Coming Soon! 🌟</H3>
      <Label>$1000 up for grabs! 💸</Label>
      <Label $color="secondary">
        Get ready for an epic holiday event! Clickmas, the ultimate clicking
        challenge, is almost here. Prepare to click, earn, and win big with
        VERSE!
      </Label>
      <LinkButton href="">📖 Learn more</LinkButton>
    </>
  );
};

export default Before;
