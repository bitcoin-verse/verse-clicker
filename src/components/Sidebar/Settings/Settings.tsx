import React, { FC } from "react";
import { useAccount, useNetwork } from "wagmi";
import { useDispatch, useTrackedState } from "../../../context/store";
import { formatNumber } from "../../../helpers/formatNumber";
import truncateEthAddress from "../../../helpers/truncateEthAddress";
import { Avatar, Connected, Header, HeaderTop, NetworkImage } from "./styled";

import ethSrc from "../../../assets/ethereum.png";
import gethSrc from "../../../assets/goerli.png";
import polySrc from "../../../assets/polygon.png";

const networkImages: Record<string, string> = {
  1: ethSrc,
  5: gethSrc,
  137: polySrc,
};

const Settings: FC = () => {
  const { address } = useAccount();
  const { chain } = useNetwork();

  const { player, settings } = useTrackedState();
  const dispatch = useDispatch();

  return (
    <>
      <Header>
        <HeaderTop>
          <Avatar />
          <Connected>Connected</Connected>
        </HeaderTop>

        <HeaderTop>
          <div>{truncateEthAddress(address || "")}</div>

          {chain && (
            <NetworkImage src={networkImages[chain?.id]} alt={chain?.name} />
          )}
        </HeaderTop>
      </Header>

      <div>{formatNumber(player.cookies)}</div>
      <div>
        <button
          onClick={() => {
            dispatch({
              type: "SET_SETTINGS",
              payload: { sound: !settings.sound },
            });
          }}
        >
          {settings.sound ? "Mute" : "Unmute"}
        </button>

        <button>Wipe Save (todo)</button>
      </div>
    </>
  );
};

export default Settings;
