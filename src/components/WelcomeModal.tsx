import React, { useEffect } from "react";
import styled from "styled-components";

import { useDispatch, useTrackedState } from "../context/store";
import { formatNumber } from "../helpers/formatNumber";
import { formatSeconds } from "../helpers/formatSeconds";

import Modal, { useModal } from "./Modal";
import { Button } from "./Button";
import { Title } from "./Title";
import Clock from "./Icons/Clock";
import Star from "./Icons/Star";
import { colors } from "./colors";

import verseMoon from "../assets/verse-moon.png";

const Moon = styled.img`
  height: 10rem;
  width: 10rem;
`;

const DataWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const Stats = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const Value = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const H3 = styled.h3`
  font-weight: 600;
  font-size: 1.5rem;
`;

const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 1rem;
`;

const WelcomeModal = () => {
  const dispatch = useDispatch();
  const { returnData } = useTrackedState();
  const { modalRef, showModal, close } = useModal();

  useEffect(() => {
    if (!returnData) return;
    showModal();
  }, [returnData]);

  return (
    <>
      <Modal
        modalRef={modalRef}
        onClose={() => dispatch({ type: "SET_RETURN_DATA" })}
        title="Verse Clicker"
      >
        <Moon src={verseMoon} />
        <h1>Welcome Back!</h1>
        <DataWrapper>
          <Stats>
            <Title>While you were away for</Title>
            <Value>
              <Clock />
              {returnData && <H3>{formatSeconds(returnData.seconds)}</H3>}
            </Value>
          </Stats>
          <Stats>
            <Title>You earned </Title>
            <Value>
              <Star size={28} color={colors.shade80} />
              <H3>{formatNumber(returnData?.cookies)} </H3>
            </Value>
          </Stats>
        </DataWrapper>
        <StyledButton onClick={close}>Play</StyledButton>
      </Modal>
    </>
  );
};

export default WelcomeModal;
