import React, { FC } from "react";
import ModalTitle from "../ModalTitle";

const Burn: FC = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <ModalTitle>Burn to earn</ModalTitle>
      <div>
        Get 24hrs worth of cookies at your current CPS rate, just by burning a
        little verse
      </div>
      <button style={{ color: "black" }} disabled>
        BURN NOW (coming soon)
      </button>
    </div>
  );
};

export default Burn;
