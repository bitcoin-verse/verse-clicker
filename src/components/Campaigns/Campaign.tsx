import React, { FC, useCallback } from "react";
import { useAccount, useNetwork } from "wagmi";

import redEnvelope from "../../../src/assets/red-envelope.png";
import { useSocketCtx } from "../../context/SocketContext";
import { GameMode } from "../../context/reducers/network";
import { useDispatch } from "../../context/store";
import useCampaignInfo from "../../hooks/useCampaignInfo";
import { ModalWrapper } from "../Boosts/styled";
import Modal, { useModal } from "../Modal";
import After from "./After";
import Before from "./Before";
import christmasJson from "./Content/christmas.json";
import lunarNewYearJson from "./Content/lunarnewyear.json";
import During from "./During";
import { CampaignButton, Wrapper } from "./styled";
import { CampaignJson } from "./types";

function getContent(campaign: GameMode): CampaignJson | null {
  switch (campaign) {
    case "Christmas":
      return christmasJson;
    case "LunarNewYear":
      return lunarNewYearJson;
    default:
      return null;
  }
}

interface Props {
  isNetworkButton?: boolean;
}

const Campaign: FC<Props> = ({ isNetworkButton }) => {
  const { modalRef, showModal, close } = useModal();
  const { address } = useAccount();
  const { chain } = useNetwork();
  const dispatch = useDispatch();
  const { socket } = useSocketCtx();
  const { campaignPhase, campaignInfo } = useCampaignInfo("LunarNewYear");

  const content = getContent("LunarNewYear");

  const playCampaign = useCallback(() => {
    dispatch({ type: "RESET_GAME" });
    dispatch({ type: "SET_GAME_MODE", payload: "LunarNewYear" });
    socket.emit("join", { address, chain: "LunarNewYear" });

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
        <img
          src={require(`../../../src/assets/${content.image}`)}
          alt={content.image}
          height="100%"
          width="100%"
        />
      </CampaignButton>

      {content && (
        <Modal title={content.title} modalRef={modalRef} overlayClose>
          <ModalWrapper>
            {campaignPhase === "BEFORE" && (
              <Before campaignInfo={campaignInfo} content={content.before} />
            )}
            {campaignPhase === "DURING" && (
              <During
                playCampaign={playCampaign}
                switchChain={switchChain}
                campaignInfo={campaignInfo}
                content={content.during}
              />
            )}
            {campaignPhase === "AFTER" && <After content={content.after} />}
          </ModalWrapper>
        </Modal>
      )}
    </Wrapper>
  );
};

export default Campaign;
