import React, { FC } from "react";
import styled from "styled-components";

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
`;

const ClickButton = styled.button`
  position: relative;
  max-width: 440px;
  width: 100%;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  & :active {
    transform: scale(0.99);
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

const Cookie: FC = () => {
  const dispatch = useDispatch();
  const { status } = useAccount();

  return (
    <CookieWrapper>
      <ClickButton
        onClick={(e) => {
          if (!e.isTrusted) {
            alert("LMB");
            return;
          }
          dispatch({ type: "CLICK_COOKIE" });
        }}
        onKeyDown={(e) => e.preventDefault()}
        disabled={status !== "connected"}
      >
        <VerseImage src={cookie} title="Verse Logo" />
      </ClickButton>
    </CookieWrapper>
  );
};

export default Cookie;
