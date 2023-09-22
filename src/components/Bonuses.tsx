import React, { useEffect, useState } from "react";
import Modal, { useModal } from "./Modal";
import { useDispatch, useTrackedState } from "../context/store";
import { useAccount } from "wagmi";
import styled from "styled-components";
import { formatNumber } from "../helpers/formatNumber";

const ModalContent = styled.div`
  color: black;

  & * {
    color: black;
  }
`;

const getTimeDiff = (diffMs: number) => {
  const diffDays = Math.floor(diffMs / 86400000); // days
  const diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
  const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
  const diffSecs = Math.floor(((diffMs % 86400000) % 3600000) / 60000); // minutes

  return diffDays + "d " + diffHrs + "h " + diffMins + "m " + diffSecs + "s";
};

const BonusText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-weight: 600;
  padding-top: 1fr;
`;

const Bonuses = () => {
  const { loading, lastSave, newCookies, verseHolder } = useTrackedState();
  const { status, address } = useAccount();
  const dispatch = useDispatch();
  const { modalRef, showModal } = useModal();

  const [lastSaveDate, setLastSaveDate] = useState<string>();

  useEffect(() => {
    if (!lastSave || !address) return;
    const now = Date.now() / 1000;
    const diffInMs = (now - lastSave) * 1000;
    setLastSaveDate(getTimeDiff(diffInMs));

    dispatch({ type: "SAVE_GAME", payload: { address } });
  }, [lastSave]);

  useEffect(() => {
    if (status === "connected" && !loading) {
      showModal();
    }
  }, [status, loading]);

  return (
    <Modal modalRef={modalRef}>
      <ModalContent>
        <h1>Welcome Back!</h1>
        <BonusText>
          <div>It&rsquo;s been {lastSaveDate} since last save</div>
          <div>
            You have accumulated {formatNumber(newCookies)} cookies since then
          </div>
          {verseHolder ? (
            <div>
              You hold VERSE, your clicks are <b>Twice as effective</b> as non
              Verse holders
            </div>
          ) : (
            <div>
              You don&rsquo;t hold VERSE. Hodl VERSE to receive a 2x click
              bonus.{" "}
              <a
                href="https://buy.bitcoin.com/verse"
                target="_blank"
                rel="noreferrer"
              >
                Buy verse
              </a>{" "}
              or{" "}
              <a href="https://verse.bitcoin.com" rel="noreferrer">
                Swap to verse
              </a>{" "}
              NOW!
            </div>
          )}
        </BonusText>
      </ModalContent>
    </Modal>
  );
};

export default Bonuses;
