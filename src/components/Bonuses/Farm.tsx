import React, { FC } from "react";
import ModalTitle from "../ModalTitle";

const Farm: FC = () => {
  return (
    <div style={{ textAlign: "center" }}>
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
    </div>
  );
};

export default Farm;
