import React, { FC, useState } from "react";
import styled from "styled-components";
import Modal, { useModal } from "../Modal";
import Burn from "./Burn";
import Hold from "./Hold";
import Farm from "./Farm";
import { useTrackedState } from "../../context/store";

const BonusesWrapper = styled.div`
  position: fixed;

  top: 30%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  gap: 1rem;
  /* height: 100%; */
  justify-content: center;

  @keyframes glow {
    from {
      box-shadow: 0 0 3px -3px #086bc6;
    }
    to {
      box-shadow: 0 0 3px 3px #086bc6;
    }
  }
`;

const BonusButton = styled.button<{ $hasBonus?: boolean }>`
  background: ${({ $hasBonus }) => ($hasBonus ? "#086bc6" : "#163756")};
  animation: glow 2s infinite alternate;
  padding: 0.5rem;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 2rem;
  font-weight: 700;
`;

const getModalContent = (content?: string, verseHolder?: boolean) => {
  switch (content) {
    case "burn":
      return {
        title: "Burn to earn (BETA)",
        component: <Burn />,
      };
    case "hold":
      return {
        title: verseHolder ? "You hold verse." : "Get 10x CPC multiplier",
        component: <Hold />,
      };
    case "farm":
      return {
        title: "Double CPS!",
        component: <Farm />,
      };
    default:
      return null;
  }
};

const Bonuses: FC = () => {
  const [content, setContent] = useState<string>();
  const { modalRef, showModal } = useModal();
  const { player } = useTrackedState();

  const modalContent = getModalContent(content, player.verseHolder);

  return (
    <>
      <BonusesWrapper>
        <BonusButton
          onClick={() => {
            setContent("hold");
            showModal();
          }}
          $hasBonus={player.verseHolder}
        >
          Hold
        </BonusButton>
        <BonusButton
          onClick={() => {
            setContent("burn");
            showModal();
          }}
        >
          Burn
        </BonusButton>

        <BonusButton
          onClick={() => {
            setContent("farm");
            showModal();
          }}
        >
          Farm
        </BonusButton>
      </BonusesWrapper>
      <Modal
        modalRef={modalRef}
        onClose={() => setContent(undefined)}
        title={modalContent?.title}
      >
        {modalContent?.component}
      </Modal>
    </>
  );
};

export default Bonuses;
