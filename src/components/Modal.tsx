import React, { FC, PropsWithChildren, RefObject, useRef } from "react";
import styled from "styled-components";

export const Dialog = styled.dialog`
  padding: 40px;
  border: none;
  border-radius: 32px;

  background: white;
  box-shadow: 0px 4px 120px 0px #0000000;
  max-width: 476px;
  box-sizing: border-box;
  width: 100%;
  margin: auto;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

interface Props {
  modalRef: RefObject<HTMLDialogElement>;
}

const Modal: FC<PropsWithChildren<Props>> = ({
  modalRef,
  children,
  ...rest
}) => {
  return (
    <Dialog
      ref={modalRef}
      {...rest}
      onClick={(event) => {
        if (!event.target) return;
        if (!modalRef || !modalRef.current) return;

        const rect = (
          event.target as HTMLDialogElement
        ).getBoundingClientRect();

        if (
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width
        ) {
          return;
        }

        modalRef.current.close();
      }}
    >
      <CloseButton
        onClick={() => {
          if (!modalRef || !modalRef.current) return;
          modalRef.current.close();
        }}
      >
        X
      </CloseButton>
      {children}
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
