import React, { useEffect } from "react";
import { useDispatch, useTrackedState } from "../../context/store";

import Modal, { useModal } from "../Modal";
import Content from "./Content";
import { formatNumber } from "../../helpers/formatNumber";

const WelcomeModal = () => {
  const dispatch = useDispatch();
  const { returnData, player } = useTrackedState();
  const { modalRef, showModal, close } = useModal();

  useEffect(() => {
    if (!returnData || returnData.seconds < 5) return;
    showModal();
  }, [returnData]);

  console.log(returnData);

  return (
    <>
      <Modal
        modalRef={modalRef}
        onClose={() => dispatch({ type: "SET_RETURN_DATA" })}
        title="Verse Clicker"
        overlayClose
      >
        <Content close={close} />
      </Modal>
    </>
  );
};

export default WelcomeModal;
