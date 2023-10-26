import React, { FC, useEffect, useState } from "react";

import adBtc from "../assets/ad-btc.png";
import adCorbin from "../assets/ad-corbin.jpg";
import adGlobalists from "../assets/ad-globalists.jpg";
import adClubHouse from "../assets/ad-club-house.png";
import adBurnEngine from "../assets/ad-burn-engine.png";
import adGoldenPepe from "../assets/ad-golden-pepe.png";
import adMcdonalds from "../assets/ad-mcdonalds.png";
import adNft from "../assets/ad-nft.png";
import adUsername from "../assets/ad-username.png";

import styled from "styled-components";

const adlist = [
  { img: adBtc, link: "https://youtu.be/dQw4w9WgXcQ?si=oXRVClQuVONile0S" },
  { img: adCorbin, link: "https://www.linkedin.com/in/corbinfraser/" },
  {
    img: adGlobalists,
    link: "https://youtu.be/8mMIocEGGM0?si=LhqsR_LcWocskpBt",
  },
  {
    img: adClubHouse,
    link: "https://dex.dev.cloud.bitcoin.com/lounge/",
  },
  {
    img: adBurnEngine,
    link: "https://bitcoin-portal.github.io/burn-srs-buy/src/index.html",
  },
  {
    img: adGoldenPepe,
    link: "https://youtu.be/vJMP7RBsoms?si=AI9rgrggncEDfAZ9",
  },
  {
    img: adMcdonalds,
    link: "https://www.bitcoin.com/jobs/",
  },
  { img: adNft, link: "https://main--chipper-hotteok-85cbb2.netlify.app/" },
  {
    img: adUsername,
    link: "https://verse-usernames.vercel.app/",
  },
];

const AdWrapper = styled.div<{ $mobileVersion?: boolean }>`
  color: #899bb5;
  font-size: 0.75rem;
  font-weight: 400;
  padding: 1rem;
  max-width: 32rem;
  margin: auto;
  display: ${({ $mobileVersion }) => ($mobileVersion ? "block" : "none")};

  @media (min-width: 768px) {
    padding: 1rem 0;
    display: ${({ $mobileVersion }) => ($mobileVersion ? "none" : "block")};
  }
`;

const AdImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  margin-top: 0.5rem;
  border-radius: 0.5rem;
`;

interface Props {
  mobileVersion?: boolean;
}

const Advertisement: FC<Props> = ({ mobileVersion }) => {
  const [rand, setRand] = useState(Math.floor(Math.random() * adlist.length));

  useEffect(() => {
    const interval = setInterval(() => {
      setRand(Math.floor(Math.random() * adlist.length));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AdWrapper $mobileVersion={mobileVersion}>
      <div>Advertisement</div>
      <a href={adlist[rand].link} target="_blank" rel="noreferrer">
        <AdImage src={adlist[rand].img} width="100%" />
      </a>
    </AdWrapper>
  );
};

export default Advertisement;
