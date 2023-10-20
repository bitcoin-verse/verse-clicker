import React, { FC } from "react";
import { useAccount } from "wagmi";
import { H1 } from "../H1";
import { H4 } from "../H4";
import { Link } from "../Link";
import { ConnectionWrapper, ContentsWrapper, Wrapper } from "./styled";
import { Title } from "../Title";
import { Button } from "../Button";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import connectWallet from "../../assets/connect-wallet.png";

const Loading: FC = () => {
  const { status } = useAccount();
  const { open } = useWeb3Modal();
  return (
    <Wrapper>
      <ContentsWrapper>
        <H1>Verse Clicker</H1>
        <H4 $secondary>
          Click for verse, climb the leaderboard! Join the Verse community and
          experience a world of endless clicking fun.
        </H4>
        <Link href="https://boo">Learn More</Link>
      </ContentsWrapper>
      <ConnectionWrapper>
        <img
          src={connectWallet}
          alt="Connect Wallet"
          height="114px"
          width="140px"
        />

        <Title>Please connect your wallet to access Verse Clicker</Title>
        {status === "connected" && <h1>Loading...</h1>}

        {status !== "connected" && (
          <div>
            <Button
              size="small"
              onClick={() => {
                open();
              }}
            >
              Connect Wallet
            </Button>
          </div>
        )}
      </ConnectionWrapper>
    </Wrapper>
  );
};

export default Loading;
