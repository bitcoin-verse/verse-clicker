import React, { FC } from "react";
import { ModalTitle, ModalContent } from "../ModalStyles";

const Burn: FC = () => {
  return (
    <ModalContent>
      <ModalTitle>Burn to earn</ModalTitle>
      <div>
        Get 24hrs worth of cookies at your current CPS rate, just by burning a
        little verse
      </div>
      <button style={{ color: "black" }} disabled>
        BURN NOW (coming soon)
      </button>
    </ModalContent>
  );
};

export default Burn;
