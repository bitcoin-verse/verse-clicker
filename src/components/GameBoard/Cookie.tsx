import React, { FC } from "react";
import styled from "styled-components";

import verseLogo from "../../assets/verse-logo.png";
import cookie from "../../assets/cookie.png";
import { useDispatch } from "../../context/store";
import { useAccount } from "wagmi";

const CookieWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 0;
`;

const VerseImage = styled.img`
  opacity: 0.9;
  width: 100%;
  max-width: 512px;
`;

const ClickButton = styled.button`
  position: relative;
  max-width: 512px;
  width: 100%;
  background: none;
  border: none;
  outline: none;

  & :hover {
    transform: scale(1.01);
  }

  & :active {
    transform: scale(0.99);
    opacity: 0.7;
  }

  &::after {
    position: absolute;
    content: "";

    background-image: url(${cookie});
    background-size: 100%;
    background-repeat: no-repeat;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &:hover::after {
    transform: scale(1.01);
  }
  &:active::after {
    transform: scale(0.99);
  }
`;

const LoadingOverlay = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: 32px;
  left: auto;
  right: auto;
  bottom: 32px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.4);

  max-width: 512px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1;

  font-size: 24px;
  font-weight: 700;
  padding: 32px;
  text-align: center;
`;

const Cookie: FC = () => {
  const dispatch = useDispatch();
  const { status } = useAccount();

  return (
    <CookieWrapper>
      {status !== "connected" && (
        <LoadingOverlay>
          Wallet not connected
          <br />
          connect wallet to start
        </LoadingOverlay>
      )}
      <ClickButton
        onClick={() => {
          dispatch({ type: "CLICK_COOKIE" });
        }}
        onKeyDown={(e) => e.preventDefault()}
        disabled={status !== "connected"}
      >
        <VerseImage src={verseLogo} title="Verse Logo" />
      </ClickButton>
    </CookieWrapper>
  );
};

export default Cookie;
