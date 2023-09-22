import React, { FC, useEffect, useRef } from "react";
import styled from "styled-components";

import cookieBite from "../../assets/cookie-bite.png";
import verseCookie from "../../assets/verse-cookie.png";

import { useDispatch, useTrackedState } from "../../context/store";
import { useAccount } from "wagmi";
import { createRoot } from "react-dom/client";
import { formatNumber } from "../../helpers/formatNumber";

const CookieWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 0;
`;

const ClickButton = styled.button`
  position: relative;
  max-width: 440px;
  height: 440px;
  width: 100%;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  background-image: url(${verseCookie});
  background-size: 100%;
  background-repeat: no-repeat;

  & :active {
    transform: scale(0.99);
  }

  &::after {
    position: absolute;
    content: "";

    background-image: url(${verseCookie});
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

const CookieClick = styled.img`
  position: absolute;
  user-select: none;
  transform: translate(-50%, -50%);
  width: 3rem;
  z-index: 1;
  animation: click 1s ease-in-out;

  @keyframes click {
    100% {
      opacity: 0;
      transform: translate(-50%, -250%);
    }
  }
`;

const CpcClick = styled.span`
  position: absolute;
  user-select: none;
  transform: translate(-50%, -50%);
  width: 3rem;
  z-index: 1;
  animation: click 1s ease-in-out;
  text-shadow: -1px -1px 0 #0779e0, 1px -1px 0 #0779e0, -1px 1px 0 #0779e0, 1px 1px 0 #0779e0;
}
  @keyframes click {
    100% {
      opacity: 0;
      transform: translate(-50%, -250%);
    }
  }
`;

const Cookie: FC = () => {
  const dispatch = useDispatch();
  const { status } = useAccount();
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const { player } = useTrackedState();

  const animateCookieClick = (e: React.MouseEvent<HTMLElement>) => {
    if (!wrapperRef.current) return;

    const x = e.clientX - wrapperRef.current.offsetLeft;
    const y = e.clientY - wrapperRef.current.offsetTop;

    const cookie = (
      <CookieClick
        src={cookieBite}
        alt="Cookie"
        style={{
          left: `${x}px`,
          top: `${y}px`,
        }}
      />
    );
    const cpc = (
      <CpcClick
        style={{
          left: `${x + 50}px`,
          top: `${y}px`,
        }}
      >
        +{formatNumber(player.aMPC)}
      </CpcClick>
    );

    const cookieContainer = document.createElement("div");
    const cpcContainer = document.createElement("div");

    const cookieRoot = createRoot(cookieContainer);
    const cpcRoot = createRoot(cpcContainer);

    cookieRoot.render(cookie);
    cpcRoot.render(cpc);

    wrapperRef.current.appendChild(cookieContainer);
    wrapperRef.current.appendChild(cpcContainer);

    setTimeout(() => {
      if (!wrapperRef.current) return;
      wrapperRef.current.removeChild(cookieContainer);
      wrapperRef.current.removeChild(cpcContainer);
    }, 500);
  };

  useEffect(() => {
    if (!wrapperRef.current) return;
    wrapperRef.current.addEventListener("dblclick", (ev: MouseEvent) => {
      animateCookieClick(
        ev as unknown as React.MouseEvent<HTMLElement, MouseEvent>,
      );
    });
  });

  return (
    <CookieWrapper ref={wrapperRef}>
      <ClickButton
        onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
          if (!e.isTrusted) {
            alert("LMB");
            return;
          }
          animateCookieClick(e);
          dispatch({ type: "CLICK_COOKIE" });
        }}
        onKeyDown={(e: React.KeyboardEvent<HTMLElement>) => e.preventDefault()}
        disabled={status !== "connected"}
      />
    </CookieWrapper>
  );
};

export default Cookie;
