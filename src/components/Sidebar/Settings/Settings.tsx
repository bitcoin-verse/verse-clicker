import React, { FC, useCallback } from "react";
import { useAccount, useNetwork } from "wagmi";

import { useSocketCtx } from "../../../context/SocketContext";
import { useDispatch, useTrackedState } from "../../../context/store";
import { formatNumber } from "../../../helpers/formatNumber";
import { getNetworkImage } from "../../../helpers/getNetworkImage";
import truncateEthAddress from "../../../helpers/truncateEthAddress";
import { Points } from "../../GameBoard/PointsDisplay/styled";
import Reset from "../../Icons/Reset";
import SoundOff from "../../Icons/SoundOff";
import SoundOn from "../../Icons/SoundOn";
import { useModal } from "../../Modal";
import PointsIcon from "../../PointsIcon";
import ConfirmModal from "./ConfirmModal";
import {
  Avatar,
  ButtonsWrapper,
  Connected,
  Header,
  HeaderRow,
  NetworkImage,
  SettingsButton,
} from "./styled";

const Settings: FC = () => {
  const { address } = useAccount();
  const { chain } = useNetwork();

  const { player, settings, gameMode } = useTrackedState();
  const dispatch = useDispatch();
  const { socket } = useSocketCtx();
  const { modalRef, showModal, close } = useModal();

  const resetScore = useCallback(() => {
    if (!gameMode || !address || !socket) return;
    socket.emit("wipe_save", { address, chain: gameMode });
    close();
    dispatch({ type: "RESET_GAME" });
  }, [gameMode, address]);

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
            <NetworkImage src={getNetworkImage(chain.id)} alt={chain?.name} />
          )}
        </HeaderRow>
      </Header>

      <Points style={{ alignSelf: "flex-start" }}>
        <PointsIcon size={32} />
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
