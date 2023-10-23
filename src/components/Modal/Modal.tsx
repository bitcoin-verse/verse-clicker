import React, { FC, PropsWithChildren, RefObject, useRef } from "react";
import {
  CloseButton,
  Dialog,
  ModalContent,
  ModalTitle,
  TitleText,
} from "./styled";
import Cross from "../Icons/Cross";

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
      {title && (
        <ModalTitle>
          <TitleText>{title}</TitleText>
          <CloseButton
            onClick={() => {
              if (!modalRef || !modalRef.current) return;
              modalRef.current.close();
              if (onClose) onClose();
            }}
          >
            <Cross size="1rem" />
          </CloseButton>
        </ModalTitle>
      )}
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
