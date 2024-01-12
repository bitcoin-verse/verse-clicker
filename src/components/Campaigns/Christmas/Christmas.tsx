import React, { FC, useCallback } from "react";
import { useAccount, useNetwork } from "wagmi";

import { useSocketCtx } from "../../context/SocketContext";
import { GameMode } from "../../context/reducers/network";
import { useDispatch, useTrackedState } from "../../context/store";
import useCampaignInfo from "../../hooks/useCampaignInfo";
import { ModalWrapper } from "../Boosts/styled";
import Modal, { useModal } from "../Modal";
import { Wrapper, CampaignButton } from "./styled";
import After from "./After";
import Before from "./Before";
import During from "./During";

interface Props {
  isNetworkButton?: boolean;
}

const Christmas: FC<Props> = ({ isNetworkButton }) => {
  const { modalRef, showModal, close } = useModal();
  const { address } = useAccount();
  const { chain } = useNetwork();
  const dispatch = useDispatch();
  const { socket } = useSocketCtx();

  const { campaignPhase, campaignInfo } = useCampaignInfo("Christmas");

  const playCampaign = useCallback(() => {
    dispatch({ type: "RESET_GAME" });
    dispatch({ type: "SET_GAME_MODE", payload: "Christmas" });
    socket.emit("join", { address, chain: "Christmas" });

    close();
  }, []);

  const switchChain = useCallback(() => {
    if (
      !chain?.name ||
      !["Ethereum", "Polygon", "Goerli", "Sepolia"].includes(chain.name)
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
    <Wrapper>
      <CampaignButton onClick={() => showModal()} $small={isNetworkButton}>
        <img src={tree} alt="Tree" height="100%" width="100%" />
      </CampaignButton>

      <Modal title="Merry Clickmas" modalRef={modalRef} overlayClose>
        <ModalWrapper>
          {campaignPhase === "BEFORE" && <Before campaignInfo={campaignInfo} />}
          {campaignPhase === "DURING" && (
            <During
              playCampaign={playCampaign}
              switchChain={switchChain}
              campaignInfo={campaignInfo}
            />
          )}
          {campaignPhase === "AFTER" && <After />}
        </ModalWrapper>
      </Modal>
    </Wrapper>
  );
};

export default Campaign;
