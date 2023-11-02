import React, { FC, useEffect, useState } from "react";

import adLounge from "../assets/ad-lounge.png";
import adPools from "../assets/ad-pools.png";
import adSwap from "../assets/ad-swap.png";
import adStaking from "../assets/ad-staking.png";
import adFarms from "../assets/ad-farms.png";

import styled from "styled-components";

const adlist = [
  { img: adLounge, link: "https://www.linkedin.com/in/corbinfraser/" },
  {
    img: adPools,
    link: "https://youtu.be/8mMIocEGGM0?si=LhqsR_LcWocskpBt",
  },
  {
    img: adSwap,
    link: "https://www.bitcoin.com/jobs/",
  },
  { img: adStaking, link: "https://main--chipper-hotteok-85cbb2.netlify.app/" },
  {
    img: adFarms,
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
