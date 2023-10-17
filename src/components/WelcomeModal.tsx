import React, { useEffect, useState } from "react";
import Modal, { useModal } from "./Modal";
import { useTrackedState } from "../context/store";
import styled from "styled-components";
import { formatNumber } from "../helpers/formatNumber";
import { useSocketCtx } from "../context/SocketContext";
import { Button } from "./Button";

const BonusText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-weight: 500;
  padding-top: 1fr;
  text-align: center;
`;

type ReturnData = { seconds: number; cookies: number };

const WelcomeModal = () => {
  const { player } = useTrackedState();
  const { socket } = useSocketCtx();
  const { modalRef, showModal } = useModal();

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
        title="Welcome Back!"
      >
        <BonusText>
          <div>It&rsquo;s been {returnData?.seconds}s since last seen</div>
          <div>
            You have accumulated {formatNumber(returnData?.cookies)} cookies
            while you were away
          </div>
          {player.verseHolder ? (
            <div>
              You hold VERSE, your clicks are <b>10x as effective</b> as non
              Verse holders
            </div>
          ) : (
            <>
              <div>
                You don&rsquo;t hold VERSE. Hodl VERSE to receive a 10x click
                bonus.
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <Button
                  as="a"
                  href="https://buy.bitcoin.com/verse"
                  target="_blank"
                  rel="noreferrer"
                >
                  Buy verse
                </Button>

                <Button
                  as="a"
                  design="secondary"
                  href="https://verse.bitcoin.com"
                  rel="noreferrer"
                >
                  Swap to verse
                </Button>
              </div>
            </>
          )}
        </BonusText>
      </Modal>
    </>
  );
};

export default WelcomeModal;
