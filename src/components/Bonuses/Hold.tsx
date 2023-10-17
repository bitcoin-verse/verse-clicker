import React, { FC } from "react";
import { useTrackedState } from "../../context/store";

const Hold: FC = () => {
  const { player } = useTrackedState();

  if (player.verseHolder)
    return <div>10x CPC multiplier applied to all your clicks</div>;

  return (
    <div>
      Get 10 times the amount of cookies per click just by holding VERSE.{" "}
      <a href="https://buy.bitcoin.com/verse" target="_blank" rel="noreferrer">
        Buy verse
      </a>{" "}
      or{" "}
      <a href="https://verse.bitcoin.com" target="_blank" rel="noreferrer">
        Swap to verse
      </a>{" "}
      NOW!
    </div>
  );
};

export default Hold;
