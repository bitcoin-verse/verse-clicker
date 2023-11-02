import React, { FC, RefObject } from "react";
import { H3 } from "../../H3";
import { Label } from "../../Label";
import Modal from "../../Modal";
import { ConfirmButton } from "./styled";

interface Props {
  modalRef: RefObject<HTMLDialogElement>;
  close: () => void;
  resetScore: () => void;
}
const ConfirmModal: FC<Props> = ({ modalRef, close, resetScore }) => {
  return (
    <Modal modalRef={modalRef} title="Confirm Reset" onClose={close}>
      <H3>
        You are about to reset your score. This will clear any progress you have
        made.
      </H3>
      <Label $color="secondary">
        Please note that this action cannot be undone
      </Label>
      <ConfirmButton onClick={resetScore}>Confirm reset</ConfirmButton>
      <ConfirmButton design="secondary" onClick={close}>
        Dismiss
      </ConfirmButton>
    </Modal>
  );
};

export default ConfirmModal;
