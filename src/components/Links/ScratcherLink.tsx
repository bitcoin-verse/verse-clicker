import React from "react";
import { useTrackedState } from "../../context/store";
import { Link } from "../Link";

const ScratcherLink = () => {
  const { isWallet } = useTrackedState();

  return (
    <Link
      href={`https://scratcher.verse.bitcoin.com/${
        isWallet ? "?origin=wallet" : ""
      }`}
      target={isWallet ? "_self" : "_blank"}
      rel="noreferrer"
    >
      Verse Scratcher
    </Link>
  );
};

export default ScratcherLink;
