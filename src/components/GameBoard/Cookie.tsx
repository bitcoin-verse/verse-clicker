import React, { FC, useCallback, useRef } from "react";
import styled from "styled-components";

import cookieBite from "../../assets/cookie-bite.png";
import verseCookie from "../../assets/verse-cookie.png";

import { useDispatch, useTrackedState } from "../../context/store";
import { useAccount } from "wagmi";
import { createRoot } from "react-dom/client";
import { formatNumber } from "../../helpers/formatNumber";

const CookieWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`;

const ClickButton = styled.button`
  position: relative;
  max-width: 440px;
  aspect-ratio: 1/1;
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
  user-select: none;
  width: 3rem;
`;

const CpcClick = styled.div`
  position: absolute;
  user-select: none;
  display: flex;
  align-items: center;
  transform: translate(-50%, -50%);
  width: 3rem;
  z-index: 1;
  animation: click 1s ease-in-out;
  text-shadow:
    -0.5px -0.5px 0 #0779e0,
    0.5px -0.5px 0 #0779e0,
    -0.5px 0.5px 0 #0779e0,
    0.5px 0.5px 0 #0779e0;

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
  const wrapperRef = useRef<HTMLButtonElement | null>(null);
  const { player } = useTrackedState();

  const animateCookieClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!wrapperRef.current) return;

    const x = e.clientX - wrapperRef.current.offsetLeft;
    const y = e.clientY - wrapperRef.current.offsetTop;

    const cpcContainer = document.createElement("div");

    const cpcRoot = createRoot(cpcContainer);

    cpcRoot.render(
      <CpcClick
        style={{
          left: x,
          top: y,
        }}
      >
        <CookieClick src={cookieBite} alt="Cookie" />+
        {formatNumber(player.aMPC)}
      </CpcClick>,
    );

    wrapperRef.current.appendChild(cpcContainer);

    const timer = setTimeout(() => {
      if (!wrapperRef.current) return;
      cpcRoot.unmount();
      wrapperRef.current.removeChild(cpcContainer);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <CookieWrapper>
      <ClickButton
        ref={wrapperRef}
        onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
          if (!e.isTrusted) {
            alert("LMB");
            return;
          }
          dispatch({ type: "CLICK_COOKIE" });
          animateCookieClick(e);
        }}
        onKeyDown={(e: React.KeyboardEvent<HTMLElement>) => e.preventDefault()}
        disabled={status !== "connected"}
      />
    </CookieWrapper>
  );
};

export default Cookie;
