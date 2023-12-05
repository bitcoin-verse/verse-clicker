import React from "react";
import { useTrackedState } from "../../context/store";
import { Link } from "../Link";

const BurnEngineLink = () => {
  const { isWallet } = useTrackedState();

  return (
    <Link
      href={`https://verse.bitcoin.com/burn/${
        isWallet ? "?origin=wallet" : ""
      }`}
      target={isWallet ? "_self" : "_blank"}
      rel="noreferrer"
    >
      Burn Engine
    </Link>
  );
};

export default BurnEngineLink;
