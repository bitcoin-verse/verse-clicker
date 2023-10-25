import React, { FC } from "react";

import { Chip } from "../Chip";
import { H3 } from "../H3";
import { LinkButton } from "../LinkButton";
import { Label } from "../Label";

import { ModalWrapper } from "./styled";

const Hold: FC = () => {
  return (
    <ModalWrapper>
      <Chip>10x boost</Chip>
      <H3>You&#39;re currently not holding any VERSE</H3>
      <Label $secondary>Buy or Swap VERSE to boost your point production</Label>
      <LinkButton
        href="https://buy.bitcoin.com/verse"
        target="_blank"
        rel="noreferrer"
      >
        Buy VERSE
      </LinkButton>
      <LinkButton
        $design="secondary"
        href="https://verse.bitcoin.com"
        target="_blank"
        rel="noreferrer"
      >
        Swap VERSE
      </LinkButton>
    </ModalWrapper>
  );
};

export default Hold;
