import React, { FC, PropsWithChildren, RefObject, useRef } from "react";
import styled from "styled-components";

export const Dialog = styled.dialog`
  padding: 2rem;
  border: none;
  border-radius: 1rem;

  background: white;
  box-shadow: 0px 4px 120px 0px #000000;
  width: 30rem;
  max-width: calc(100% - 4rem);

  box-sizing: border-box;
  margin: auto;

  &::backdrop {
    background: rgba(0, 0, 0, 0.7);
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: black;
  font-size: 1rem;
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
    <Dialog ref={modalRef} {...rest}>
      <CloseButton
        onClick={() => {
          if (!modalRef || !modalRef.current) return;
          modalRef.current.close();
        }}
      >
        ✕
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
