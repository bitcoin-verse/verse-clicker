import React, { useEffect, useState } from "react";
import Modal, { useModal } from "./Modal";
import { useTrackedState } from "../context/store";
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
  const diffSecs = Math.floor(diffMs / 1000 - diffMins / 60); // seconds

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
  const { loading, lastSaveLoaded, newCookies, verseHolder } =
    useTrackedState();
  const { status } = useAccount();
  const { modalRef, showModal } = useModal();
  const [cachedSave, setCachedSave] = useState<string>();
  const [, setWasLoaded] = useState(false);

  useEffect(() => {
    if (!lastSaveLoaded) return;
    const now = new Date();
    const then = new Date(lastSaveLoaded * 1000);
    const diff = Math.abs(now.getTime() - then.getTime());
    setCachedSave(getTimeDiff(diff));
  }, [lastSaveLoaded]);

  useEffect(() => {
    if (status === "connected" && !loading) {
      setWasLoaded((wasLoaded) => {
        if (wasLoaded) return true;
        showModal();
        return true;
      });
    }
  }, [status, loading]);

  return (
    <Modal modalRef={modalRef}>
      <ModalContent>
        <h1>Welcome Back!</h1>
        <BonusText>
          <div>It&rsquo;s been {cachedSave} since last save</div>
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
