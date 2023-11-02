import React, { useEffect } from "react";
import { useDispatch, useTrackedState } from "../../context/store";

import Modal, { useModal } from "../Modal";
import Content from './Content';

const WelcomeModal = () => {
  const dispatch = useDispatch();
  const { returnData, player } = useTrackedState();
  const { modalRef, showModal } = useModal();

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
        overlayClose
      >
        <Content returningUser={!!player.cookies} />
      </Modal>
    </>
  );
};

export default WelcomeModal;
