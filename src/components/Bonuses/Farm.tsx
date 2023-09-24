import React, { FC } from "react";
import { ModalContent, ModalTitle } from "../ModalStyles";

const Farm: FC = () => {
  return (
    <ModalContent>
      <ModalTitle>Double CPS!</ModalTitle>
      <div>Have verse staked or locked in a farm for a 2xCPS multiplier</div>
      <div>
        To start farming go check out{" "}
        <a
          href="https://verse.bitcoin.com/farms"
          target="_blank"
          rel="noreferrer"
        >
          VERSE DEX
        </a>{" "}
        NOW!
      </div>
    </ModalContent>
  );
};

export default Farm;
