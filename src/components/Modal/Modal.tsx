import React, { FC, PropsWithChildren, RefObject, useRef } from "react";

import Cross from "../Icons/Cross";
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
  overlayClose?: boolean;
  dialogStyles?: React.CSSProperties;
  contentStyles?: React.CSSProperties;
}

const Modal: FC<PropsWithChildren<Props>> = ({
  modalRef,
  children,
  title,
  onClose,
  overlayClose,
  contentStyles,
  dialogStyles,
  ...rest
}) => {
  const close = () => {
    if (!modalRef || !modalRef.current) return;
    document.body.style.overflow = "unset";
    modalRef.current.close();
    if (onClose) onClose();
  };

  const clickOverlayToClose = (event: React.MouseEvent<HTMLElement>) => {
    if (
      event.target instanceof HTMLElement &&
      event.target.nodeName === "DIALOG" &&
      overlayClose
    ) {
      close();
    }
  };

  return (
    <Dialog
      ref={modalRef}
      onClick={clickOverlayToClose}
      style={dialogStyles}
      {...rest}
    >
      {title && (
        <ModalTitle>
          <TitleText>{title}</TitleText>
          <CloseButton onClick={close}>
            <Cross size="1rem" />
          </CloseButton>
        </ModalTitle>
      )}
      <ModalContent style={contentStyles}>{children}</ModalContent>
    </Dialog>
  );
};

export const useModal = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const showModal = () => {
    document.body.style.overflow = "hidden";
    if (!modalRef || !modalRef.current) return;
    modalRef.current.showModal();
  };

  const close = () => {
    document.body.style.overflow = "unset";
    if (!modalRef || !modalRef.current) return;
    modalRef.current.close();
  };

  return { showModal, close, modalRef };
};

export default Modal;
