import React from "react";
import { useAccount, useNetwork } from "wagmi";

import { CampaignButton } from "../styled";

import tree from "../../../assets/tree.png";
import Modal, { useModal } from "../../Modal";

import { ModalWrapper } from "../../Boosts/styled";
import { Button } from "../../Button";
import { useDispatch, useTrackedState } from "../../../context/store";
import { useSocketCtx } from "../../../context/SocketContext";
import useCampaignInfo from "../../../hooks/useCampaignInfo";
import { GameMode } from "../../../context/reducers/network";
import Content from "./Content";

const Christmas = () => {
  const { modalRef, showModal, close } = useModal();
  const { address } = useAccount();
  const { chain } = useNetwork();
  const dispatch = useDispatch();
  const { socket } = useSocketCtx();
  const { gameMode } = useTrackedState();

  const { campaignPhase, } = useCampaignInfo("Christmas");

  return (
    <>
      <CampaignButton onClick={() => showModal()}>
        <img src={tree} alt="Tree" height="100%" width="100%" />
      </CampaignButton>

      <Modal title="Merry Clickmas" modalRef={modalRef}>
        <ModalWrapper>
          <Content/>

          {campaignPhase === "DURING" && gameMode !== "Christmas" && (
            <Button
              $size="small"
              onClick={() => {
                dispatch({ type: "RESET_GAME" });
                dispatch({ type: "SET_GAME_MODE", payload: "Christmas" });
                socket.emit("join", { address, chain: "Christmas" });

                close();
              }}
            >
              Start NOW
            </Button>
          )}
          {gameMode === "Christmas" && (
            <Button
              $size="small"
              onClick={() => {
                if (
                  !chain?.name ||
                  !["Ethereum", "Polygon", "Goerli"].includes(chain.name)
                ) {
                  return;
                }

                dispatch({ type: "RESET_GAME" });
                dispatch({
                  type: "SET_GAME_MODE",
                  payload: chain?.name as GameMode,
                });
                socket.emit("join", { address, chain: chain?.name });
                close();
              }}
            >
              Go back to {chain?.name}
            </Button>
          )}
        </ModalWrapper>
      </Modal>
    </>
  );
};

export default Christmas;
