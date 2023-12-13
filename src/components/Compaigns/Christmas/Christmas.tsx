import React, { useCallback } from "react";
import { useAccount, useNetwork } from "wagmi";

import { CampaignButton } from "../styled";

import tree from "../../../assets/tree.png";
import Modal, { useModal } from "../../Modal";

import { ModalWrapper } from "../../Boosts/styled";
import { useDispatch } from "../../../context/store";
import { useSocketCtx } from "../../../context/SocketContext";
import useCampaignInfo, { CampaignPhase } from "../../../hooks/useCampaignInfo";
import { GameMode } from "../../../context/reducers/network";
import Before from "./Before";
import After from "./After";
import During from "./During";

const getCampaignContent = (
  campaignPhase: CampaignPhase,
  playCampaign: () => void,
  switchChain: () => void,
) => {
  switch (campaignPhase) {
    case "BEFORE":
      return <Before />;
    case "DURING":
      return <During playCampaign={playCampaign} switchChain={switchChain} />;
    case "AFTER":
      return <After />;
  }
};

const Christmas = () => {
  const { modalRef, showModal, close } = useModal();
  const { address } = useAccount();
  const { chain } = useNetwork();
  const dispatch = useDispatch();
  const { socket } = useSocketCtx();

  const { campaignPhase } = useCampaignInfo("Christmas");

  const playCampaign = useCallback(() => {
    dispatch({ type: "RESET_GAME" });
    dispatch({ type: "SET_GAME_MODE", payload: "Christmas" });
    socket.emit("join", { address, chain: "Christmas" });

    close();
  }, []);

  const switchChain = useCallback(() => {
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
  }, []);

  return (
    <>
      <CampaignButton onClick={() => showModal()}>
        <img src={tree} alt="Tree" height="100%" width="100%" />
      </CampaignButton>

      <Modal title="Merry Clickmas" modalRef={modalRef}>
        <ModalWrapper>
          {getCampaignContent(campaignPhase, playCampaign, switchChain)}
        </ModalWrapper>
      </Modal>
    </>
  );
};

export default Christmas;
