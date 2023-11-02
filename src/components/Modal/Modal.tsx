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
              document.body.style.overflow = "unset";
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
