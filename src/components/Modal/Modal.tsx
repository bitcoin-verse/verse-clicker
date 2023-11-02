import React, {
  FC,
  PropsWithChildren,
  RefObject,
  useEffect,
  useRef,
} from "react";
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
  overlayToClose?: boolean;
}

const Modal: FC<PropsWithChildren<Props>> = ({
  modalRef,
  children,
  title,
  onClose,
  overlayToClose,
  ...rest
}) => {
  const close = () => {
    if (!modalRef || !modalRef.current) return;
    document.body.style.overflow = "unset";
    modalRef.current.close();
    if (onClose) onClose();
  };

  const clickOverlayToClose = (event: React.UIEvent) => {
    if (
      event.target instanceof HTMLElement &&
      event.target.nodeName === "DIALOG"
    ) {
      close();
    }
  };

  return (
    <Dialog
      ref={modalRef}
      onClick={overlayToClose ? clickOverlayToClose : undefined}
      {...rest}
    >
      {title && (
        <ModalTitle>
          <TitleText>{title}</TitleText>
          <CloseButton
            onClick={close}
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

  useEffect(() => {
    if (modalRef.current?.show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalRef.current?.show]);

  useEffect(() => {
    document.body.style.overflow = "unset";
  }, []);
  const showModal = () => {
    if (!modalRef || !modalRef.current) return;
    document.body.style.overflow = "hidden";
    modalRef.current.showModal();
  };

  const close = () => {
    if (!modalRef || !modalRef.current) return;
    document.body.style.overflow = "unset";
    modalRef.current.close();
  };

  return { showModal, close, modalRef };
};

export default Modal;
