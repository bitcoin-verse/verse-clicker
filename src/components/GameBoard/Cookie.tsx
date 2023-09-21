import React, { FC, useEffect, useRef } from "react";
import styled from "styled-components";

import cookie from "../../assets/cookie.png";
import verseCookie from "../../assets/verse-cookie.png";

import { useDispatch } from "../../context/store";
import { useAccount } from "wagmi";
import { createRoot } from "react-dom/client";

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

const CookieClick = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
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

const Cookie: FC = () => {
  const dispatch = useDispatch();
  const { status } = useAccount();
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const animateCookieClick = (e: React.MouseEvent<HTMLElement>) => {
    if (!wrapperRef.current) return;

    const x = e.clientX - wrapperRef.current.offsetLeft;
    const y = e.clientY - wrapperRef.current.offsetTop;
    const cookie = (
      <CookieClick
        src={verseCookie}
        alt="Cookie"
        style={{
          left: `${x}px`,
          top: `${y}px`,
        }}
      />
    );
    const cookieContainer = document.createElement("div");
    const root = createRoot(cookieContainer);
    root.render(cookie);
    wrapperRef.current.appendChild(cookieContainer);

    setTimeout(() => {
      if (!wrapperRef.current) return;
      wrapperRef.current.removeChild(cookieContainer);
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
      >
        <VerseImage src={cookie} title="Verse Logo" />
      </ClickButton>
    </CookieWrapper>
  );
};

export default Cookie;
