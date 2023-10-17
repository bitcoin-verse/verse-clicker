import React, { FC, PropsWithChildren, RefObject, useRef } from "react";
import {
  CloseButton,
  Dialog,
  ModalContent,
  ModalTitle,
  TitleText,
} from "./styled";

interface Props {
  modalRef: RefObject<HTMLDialogElement>;
  title?: string;
  onClose?: () => void;
}

const Modal: FC<PropsWithChildren<Props>> = ({
  modalRef,
  children,
  title,
  onClose,
  ...rest
}) => {
  return (
    <Dialog ref={modalRef} {...rest}>
      <ModalTitle>
        {title && <TitleText>{title}</TitleText>}
        <CloseButton
          onClick={() => {
            if (!modalRef || !modalRef.current) return;
            modalRef.current.close();
            if (onClose) onClose();
          }}
        >
          ✕
        </CloseButton>
      </ModalTitle>
      <ModalContent>{children}</ModalContent>
    </Dialog>
  );
};

export const useModal = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const showModal = () => {
    if (!modalRef || !modalRef.current) return;

    modalRef.current.showModal();
  };

  const close = () => {
    if (!modalRef || !modalRef.current) return;

    modalRef.current.close();
  };

  return { showModal, close, modalRef };
};

export default Modal;
