import React, { FC, Suspense, lazy, useEffect } from "react";
import { formatEther } from "viem";
import {
  useAccount,
  useChainId,
  useContractReads,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";

import Footer from "../components/Footer";
import { H1 } from "../components/H1";
import Header from "../components/Header/Header";
import Layout from "../components/Layout";
import { useTrackedState } from "../context/store";
import { PRESTIGE_SEPOLIA_ADDRESS } from "../contracts/constants";
import getPrestigeDetails from "../contracts/getPrestigeDetails.ts";
import getVerseTokenDetails from "../contracts/getVerseTokenDetails";
import getPrestigeData from "../helpers/getPrestigeData";
import getPrestigeSignature from "../helpers/getPrestigeSignature";

const Particles = lazy(() => import("../components/Particles"));

const Prestige: FC = () => {
  const { address } = useAccount();
  const chainId = useChainId();
  const { gameMode } = useTrackedState();

  const prestigeContractDetails = getPrestigeDetails(chainId);
  const verseContractDetails = getVerseTokenDetails(chainId);

  const { data, refetch } = useContractReads({
    contracts: [
      {
        ...prestigeContractDetails,
        functionName: "balanceOf",
        args: address ? [address, 0n] : [PRESTIGE_SEPOLIA_ADDRESS, 0n],
      },
      {
        ...prestigeContractDetails,
        functionName: "nonces",
        args: address ? [address] : [PRESTIGE_SEPOLIA_ADDRESS],
      },
      {
        ...verseContractDetails,
        functionName: "allowance",
        args: address ? [address, PRESTIGE_SEPOLIA_ADDRESS] : [],
      },
      {
        ...prestigeContractDetails,
        functionName: "uri",
        args: [0],
      },
    ],
  });

  const { write, data: writeData } = useContractWrite({
    ...prestigeContractDetails,
    functionName: "increasePrestigeLevel",
  });

  const { status } = useWaitForTransaction(writeData);

  useEffect(() => {
    if (status === "success") {
      refetch();
    }
  }, [status]);

  useEffect(() => {
    console.log(data);

    const getTokenData = async () => {
      if (!data || typeof data?.[3].result !== "string") return;

      const level = await getPrestigeData(data[3].result, 0);
      const points = await getPrestigeData(data[3].result, 1);

      console.log(level, points);
    };

    getTokenData();
  }, [data]);

  return (
    <Layout>
      <Suspense>
        <Particles />
      </Suspense>
      <Header />
      <div style={{ flex: 1, zIndex: 1, background: "black" }}>
        <H1>Prestige</H1>
        <div>{address}</div>
        <div>Prestige Level: {data?.[0]?.result?.toString()}</div>
        <div>Nonce: {data?.[1]?.result?.toString()}</div>

        <div>Allowance: {formatEther((data?.[2].result as bigint) || 0n)}</div>

        <button
          type="button"
          onClick={async () => {
            if (!address) return;
            const signData = await getPrestigeSignature(address, gameMode);
            console.log("prestige", signData);
            if (!signData) return;

            const res = write({
              args: [signData?.signature, signData?.message],
            });

            console.log(res);
          }}
        >
          Prestige
        </button>
        <div>Status: {status}</div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Prestige;
