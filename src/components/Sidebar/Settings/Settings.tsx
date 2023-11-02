import React, { FC, useCallback } from "react";
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
import SoundOn from "../../Icons/SoundOn";
import Reset from "../../Icons/Reset";
import { useSocketCtx } from "../../../context/SocketContext";
import { useModal } from "../../Modal";
import ConfirmModal from "./ConfirmModal";

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
  const { socket } = useSocketCtx();
  const { modalRef, showModal, close } = useModal();

  const resetScore = useCallback(() => {
    if (!chain || !address) return;
    socket.emit("wipe_save", { address, chain: chain.name });
    close();
    dispatch({ type: "RESET_GAME" });
  }, []);

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

      <Points style={{ alignSelf: "flex-start" }}>
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
              <SoundOn size="2rem" />
              Mute
            </>
          ) : (
            <>
              <SoundOff size="2rem" />
              Unmute
            </>
          )}
        </SettingsButton>

        <SettingsButton onClick={showModal}>
          <Reset size="2rem" />
          Reset score
        </SettingsButton>
      </ButtonsWrapper>
      <ConfirmModal modalRef={modalRef} close={close} resetScore={resetScore} />
    </>
  );
};

export default Settings;
