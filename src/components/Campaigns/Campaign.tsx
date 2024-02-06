import React, { FC, useCallback } from "react";
import { useNetwork } from "wagmi";

import redEnvelope from "../../../src/assets/red-envelope.png";
import { CURRENT_CAMPAIGN } from "../../constants";
import { useSocketCtx } from "../../context/SocketContext";
import { GameMode } from "../../context/reducers/network";
import { useDispatch, useTrackedState } from "../../context/store";
import { ModalWrapper } from "../Boosts/styled";
import Modal, { useModal } from "../Modal";
import After from "./After";
import Before from "./Before";
import christmasJson from "./Content/christmas.json";
import lunarNewYearJson from "./Content/lunarnewyear.json";
import During from "./During";
import { CampaignButton, CampaignImg, Wrapper } from "./styled";
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
  const { socket } = useSocketCtx();
  const { modalRef, showModal, close } = useModal();
  const { chain } = useNetwork();
  const dispatch = useDispatch();
  const {
    campaign: { campaignInfo, campaignPhase },
  } = useTrackedState();

  const content = getContent(CURRENT_CAMPAIGN);

  const playCampaign = useCallback(() => {
    if (!socket) return;
    dispatch({ type: "RESET_GAME" });
    dispatch({ type: "SET_GAME_MODE", payload: CURRENT_CAMPAIGN });
    close();
  }, [socket]);

  const switchChain = useCallback(() => {
    if (
      !socket ||
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
    close();
  }, [socket]);

  return (
    <Wrapper>
      <CampaignButton onClick={() => showModal()} $small={isNetworkButton}>
        <CampaignImg src={redEnvelope} alt="red envelope" />
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
