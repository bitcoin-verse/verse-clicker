import React from "react";
import { Description } from "./styled";

const NewUser = () => {
  return (
    <>
      <h1>Welcome to Verse Clicker</h1>
      <Description>
        Click for Verse points, climb the leaderboard! Join the Verse community
        and experience a world of endless clicking fun.
      </Description>
      <Description style={{ textAlign: 'left', width: '100%' }}>
        <span>The goal:</span>
        <br />
        Generate infinite Verse Points.
      </Description>
      <Description style={{ textAlign: 'left' }}>
        <span>How to play:</span>
        <br />
        1. Earn Verse Points by clicking on the Verse Clicker logo.
        <br />
        <br />
        2. Use Verse Points to buy Tools and Upgrades that automatically generate more Verse Points.
        <br />
        <br />
        3. Optionally use VERSE tokens to boost your Verse Points generation.  
      </Description>
    </>
  );
};

export default NewUser;
