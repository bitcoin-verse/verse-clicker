import React, { FC, RefObject } from "react";

import { Button } from "../../Button";
import { H3 } from "../../H3";
import { Label } from "../../Label";
import Modal from "../../Modal";

interface Props {
  modalRef: RefObject<HTMLDialogElement>;
  close: () => void;
  resetScore: () => void;
}
const ConfirmModal: FC<Props> = ({ modalRef, close, resetScore }) => {
  return (
    <Modal modalRef={modalRef} title="Confirm Reset" onClose={close}>
      <H3 $align="left">
        You are about to reset your score. This will clear any progress you have
        made.
      </H3>
      <Label $color="secondary">
        Please note that this action cannot be undone
      </Label>
      <Button $fullWidth onClick={resetScore}>
        Confirm reset
      </Button>
      <Button $fullWidth design="secondary" onClick={close}>
        Dismiss
      </Button>
    </Modal>
  );
};

export default ConfirmModal;
