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

const Bonuses = () => {
  const { loading, lastSave, newCookies } = useTrackedState();
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
        <h1>Welcome Back!!</h1>
        <div>It&rsquo;s been {lastSaveDate} since last save</div>
        <div>You have accumulated {formatNumber(newCookies)} since then</div>
      </ModalContent>
    </Modal>
  );
};

export default Bonuses;
