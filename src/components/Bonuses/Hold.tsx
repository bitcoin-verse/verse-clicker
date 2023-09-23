import React, { FC } from "react";
import { useTrackedState } from "../../context/store";
import ModalTitle from "../ModalTitle";

const Hold: FC = () => {
  const { verseHolder } = useTrackedState();

  if (verseHolder)
    return (
      <>
        <ModalTitle>You hold verse.</ModalTitle>
        <div>10x CPC multiplier applied to all your clicks</div>
      </>
    );

  return (
    <div style={{ textAlign: "center" }}>
      <ModalTitle>Get 10x CPC multiplier</ModalTitle>
      <div>
        Get 10 times the amount of cookies per click just by holding VERSE.{" "}
        <a
          href="https://buy.bitcoin.com/verse"
          target="_blank"
          rel="noreferrer"
        >
          Buy verse
        </a>{" "}
        or{" "}
        <a href="https://verse.bitcoin.com" target="_blank" rel="noreferrer">
          Swap to verse
        </a>{" "}
        NOW!
      </div>
    </div>
  );
};

export default Hold;
