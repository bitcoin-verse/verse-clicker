import React, { useEffect } from "react";
import { useDispatch, useTrackedState } from "../../context/store";

import Modal, { useModal } from "../Modal";
import ReturningUser from "./ReturningUser";
import NewUser from "./NewUser";
import { Moon, StyledButton } from "./styled";
import verseMoon from "../../assets/verse-moon.png";

const WelcomeModal = () => {
  const dispatch = useDispatch();
  const { returnData, player } = useTrackedState();
  const { modalRef, showModal, close } = useModal();

  useEffect(() => {
    if (!returnData) return;
    showModal();
  }, [returnData]);

  return (
    <>
      <Modal
        modalRef={modalRef}
        onClose={() => dispatch({ type: "SET_RETURN_DATA" })}
        title="Verse Clicker"
      >
        <Moon src={verseMoon} />
        {player.cookies ? <ReturningUser /> : <NewUser />}
        <StyledButton onClick={close}>Play</StyledButton>
      </Modal>
    </>
  );
};

export default WelcomeModal;
