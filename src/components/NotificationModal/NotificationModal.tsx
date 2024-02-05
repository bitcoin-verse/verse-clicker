import React, { useEffect } from "react";

import { useDispatch, useTrackedState } from "../../context/store";
import Modal, { useModal } from "../Modal";
import Content from "./Content";

const NotificationModal = () => {
  const dispatch = useDispatch();
  const { returnData, bonusData } = useTrackedState();
  const { modalRef, showModal, close } = useModal();

  useEffect(() => {
    if (returnData || bonusData.length > 0) showModal();
  }, [returnData?.seconds, bonusData]);

  return (
    <>
      <Modal
        modalRef={modalRef}
        onClose={() => {
          dispatch({ type: "SET_RETURN_DATA" });
          dispatch({ type: "SET_BONUS_DATA" });
        }}
        title="Verse Clicker"
        overlayClose
      >
        <Content close={close} />
      </Modal>
    </>
  );
};

export default NotificationModal;
