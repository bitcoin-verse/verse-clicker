import React, { FC } from "react";
import { Wrapper } from "./styled";
import { useAccount, useChainId } from "wagmi";
import { useDispatch, useTrackedState } from "../../../context/store";
import { formatNumber } from "../../../helpers/formatNumber";
import truncateEthAddress from "../../../helpers/truncateEthAddress";

const Settings: FC = () => {
  const { address } = useAccount();
  const chainId = useChainId();

  const { player, settings } = useTrackedState();
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div>Network: {chainId}</div>
      <div>Address: {truncateEthAddress(address || "")}</div>
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
    </Wrapper>
  );
};

export default Settings;
