import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useTrackedState } from "../context/store";
import { formatNumber } from "../helpers/formatNumber";
import { formatSeconds } from "../helpers/formatSeconds";
import { useSocketCtx } from "../context/SocketContext";

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

type ReturnData = { seconds: number; cookies: number };

const WelcomeModal = () => {
  const { socket } = useSocketCtx();
  const { modalRef, showModal, close } = useModal();

  const [returnData, setReturnData] = useState<ReturnData>();

  useEffect(() => {
    const onWelcomeBack = (data: ReturnData) => {
      setReturnData(data);
      showModal();
    };
    socket.on("welcome_back", onWelcomeBack);

    return () => {
      socket.off("welcome_back", onWelcomeBack);
    };
  }, []);

  return (
    <>
      <Modal
        modalRef={modalRef}
        onClose={() => setReturnData(undefined)}
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
