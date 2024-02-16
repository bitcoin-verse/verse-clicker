import React, { FC } from "react";
import { useChainId } from "wagmi";

import { useTrackedState } from "../../context/store";
import { getNetworkImage } from "../../helpers/getNetworkImage";
import Modal, { useModal } from "../Modal";
import GameModesList, { getGameModeDetails } from "./Connect/GameModesList";
import { Button, ButtonContent } from "./styled";

const GameModeButton: FC = () => {
  const {
    modalRef: gamemModesModalRef,
    showModal: showGameModes,
    close: closeGameModes,
  } = useModal();
  const { gameMode } = useTrackedState();
  const chainId = useChainId();

  return (
    <>
      <Button>
        <ButtonContent
          onClick={() => {
            showGameModes();
          }}
          $logo={getGameModeDetails(gameMode)?.icon || getNetworkImage(chainId)}
          style={{
            background: `linear-gradient(180deg, #425472 0%, #313e57 100%)`,
          }}
        />
      </Button>
      <Modal
        modalRef={gamemModesModalRef}
        title="Select Game Mode"
        overlayClose
      >
        <GameModesList close={closeGameModes} />
      </Modal>
    </>
  );
};

export default GameModeButton;
