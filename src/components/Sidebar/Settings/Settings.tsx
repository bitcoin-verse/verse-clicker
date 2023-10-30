import React, { FC } from "react";
import { useAccount, useNetwork } from "wagmi";
import { useDispatch, useTrackedState } from "../../../context/store";
import { formatNumber } from "../../../helpers/formatNumber";
import truncateEthAddress from "../../../helpers/truncateEthAddress";
import {
  Avatar,
  Connected,
  Header,
  HeaderRow,
  NetworkImage,
  ButtonsWrapper,
  SettingsButton,
} from "./styled";

import ethSrc from "../../../assets/ethereum.png";
import gethSrc from "../../../assets/goerli.png";
import polySrc from "../../../assets/polygon.png";
import { Points } from "../../GameBoard/PointsDisplay/styled";
import Star from "../../Icons/Star";
import SoundOff from "../../Icons/SoundOff";
import Sound from "../../Icons/Sound";
import Restore from "../../Icons/Restore";

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
        <HeaderRow>
          <Avatar />
          <Connected>Connected</Connected>
        </HeaderRow>

        <HeaderRow>
          <div>{truncateEthAddress(address || "")}</div>

          {chain && (
            <NetworkImage src={networkImages[chain?.id]} alt={chain?.name} />
          )}
        </HeaderRow>
      </Header>

      <Points>
        <Star size={32} />
        {formatNumber(player.cookies)}
      </Points>

      <ButtonsWrapper>
        <SettingsButton
          onClick={() => {
            dispatch({
              type: "SET_SETTINGS",
              payload: { sound: !settings.sound },
            });
          }}
        >
          {settings.sound ? (
            <>
              <SoundOff size="2rem" />
              Mute
            </>
          ) : (
            <>
              <Sound size="2rem" />
              Unmute
            </>
          )}
        </SettingsButton>

        <SettingsButton>
          <Restore size="2rem" />
          Reset score
        </SettingsButton>
      </ButtonsWrapper>
    </>
  );
};

export default Settings;
