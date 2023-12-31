import React, { FC, RefObject } from "react";

import { Button } from "../../Button";
import { H3 } from "../../H3";
import { Label } from "../../Label";
import Modal from "../../Modal";
import { Content } from "./styled";

interface Props {
  modalRef: RefObject<HTMLDialogElement>;
  close: () => void;
  resetScore: () => void;
}
const ConfirmModal: FC<Props> = ({ modalRef, close, resetScore }) => {
  return (
    <Modal modalRef={modalRef} title="Confirm Reset" onClose={close}>
      <Content>
        <H3>
          You are about to reset your score. This will clear any progress you
          have made.
        </H3>
        <Label $color="secondary">
          Please note that this action cannot be undone
        </Label>
      </Content>
      <Button $fullWidth onClick={resetScore}>
        Confirm reset
      </Button>
      <Button $fullWidth $design="secondary" onClick={close}>
        Dismiss
      </Button>
    </Modal>
  );
};

export default ConfirmModal;
