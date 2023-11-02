import React from "react";
import { Description } from "./styled";

const NewUser = () => {
  return (
    <>
      <h1>Welcome to Verse Clicker</h1>
      <Description>
        Click for verse, climb the leaderboard! Join the Verse community and
        experience a world of endless clicking fun.
      </Description>
      <Description style={{ textAlign: 'left' }}>
        Here is how to play:
        <br />
        <br />
        1. Click the Verse moon to earn points
        <br />
        <br />
        2. Boost your clicking power by holding, farming, staking, and/or
        burning VERSE
        <br />
        <br />
        3. Buy Buildings and Upgrades with your points to passively generate
        more points
        <br />
        <br />
        4. Keep clicking and buying to see the number go up!
      </Description>
    </>
  );
};

export default NewUser;
