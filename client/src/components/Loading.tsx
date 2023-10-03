import { Web3Button } from "@web3modal/react";
import React, { FC } from "react";
import styled from "styled-components";
import { useAccount } from "wagmi";

const OverlayConnect = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: grid;
  grid-template-rows: 70% 30%;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: rgba(3, 12, 20, 0.7);
  z-index: 2;
`;

const Loading: FC = () => {
  const { status } = useAccount();

  return (
    <OverlayConnect>
      <div>
        {status === "connected" ? (
          <h1>Loading...</h1>
        ) : (
          <h1 style={{ margin: "2rem" }}>Connect Wallet to start</h1>
        )}

        {status !== "connected" && <Web3Button />}
      </div>
    </OverlayConnect>
  );
};

export default Loading;
