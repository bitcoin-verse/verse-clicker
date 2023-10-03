import React, { FC } from "react";
import { useTrackedState } from "../../context/store";
import { ModalContent, ModalTitle } from "../ModalStyles";

const Hold: FC = () => {
  const { player } = useTrackedState();

  if (player.verseHolder)
    return (
      <ModalContent>
        <ModalTitle>You hold verse.</ModalTitle>
        <div>10x CPC multiplier applied to all your clicks</div>
      </ModalContent>
    );

  return (
    <ModalContent>
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
    </ModalContent>
  );
};

export default Hold;
