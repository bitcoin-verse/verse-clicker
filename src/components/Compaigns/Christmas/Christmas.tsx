import React from "react";
import { useAccount } from "wagmi";

import { CampaignButton } from "../styled";

import tree from "../../../assets/tree.png";
import Modal, { useModal } from "../../Modal";

import { ModalWrapper } from "../../Boosts/styled";
import { H3 } from "../../H3";
import { Label } from "../../Label";
import { Button } from "../../Button";
import { useDispatch } from "../../../context/store";
import { useSocketCtx } from "../../../context/SocketContext";
import useCampaignInfo from "../../../hooks/useCampaignInfo";

const Christmas = () => {
  const { modalRef, showModal, close } = useModal();
  const { address } = useAccount();
  const dispatch = useDispatch();
  const { socket } = useSocketCtx();
  const campaign = useCampaignInfo("Christmas");

  console.log(campaign);
  return (
    <>
      <CampaignButton onClick={() => showModal()}>
        <img src={tree} alt="Tree" height="100%" width="100%" />
      </CampaignButton>

      <Modal title="Christmas Campaign" modalRef={modalRef}>
        <ModalWrapper>
          <H3>HO! HO! HO!</H3>
          <Label>Get into the clickmas spirit by joining this campaign</Label>
          <Label>Get to top of the leaderboard to win prizes</Label>
          <Label>From: December 12th</Label>
          <Label>To: December 25th</Label>

          <Button
            $size="small"
            onClick={() => {
              dispatch({ type: "RESET_GAME" });
              dispatch({ type: "SET_NETWORK", payload: "Christmas" });
              socket.emit("join", { address, chain: "Christmas" });
              close();
            }}
          >
            Start NOW
          </Button>
        </ModalWrapper>
      </Modal>
    </>
  );
};

export default Christmas;
