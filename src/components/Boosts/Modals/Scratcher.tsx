import React, { FC } from "react";

import { LinkButton } from "../../LinkButton";

import { Description, ModalWrapper } from "../styled";
import { H3 } from "../../H3";
import { Text } from "../../Text";

const Scratcher: FC = () => {
  return (
    <ModalWrapper>
      <H3>Boost your points production with Scratch & Win tickets</H3>
      <Description style={{ textAlign: "left" }}>
        1. Buy a ticket
        <br />
        2. Scratch the same number 3 times to win VERSE
        <br />
        3. Claim your prize
      </Description>
      <Text>
        Your Verse Clicker one-time bonus = your current points production rate
        X your Scratch & Win prize amount
      </Text>
      <LinkButton href="https://scratcher.verse.bitcoin.com/" target="_blank">
        Scratch & Win
      </LinkButton>
    </ModalWrapper>
  );
};

export default Scratcher;
