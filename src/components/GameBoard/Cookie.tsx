import React, { FC, useCallback, useEffect, useRef, useState } from "react";
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
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

  &:hover {
    transform: scale(1.01);
  }

  &:active {
    transform: scale(1);
  }
`;

const CookieClick = styled.img`
  user-select: none;
  width: 3rem;
  pointer-events: none;
`;

const CpcClick = styled.div`
  pointer-events: none;
  position: absolute;
  user-select: none;
  display: flex;
  align-items: center;
  transform: translate(-50%, -50%);
  width: 3rem;
  /* z-index: 1; */
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
  const { status, address } = useAccount();
  const wrapperRef = useRef<HTMLButtonElement | null>(null);

  const {
    player,
    settings: { clicksLimit },
  } = useTrackedState();
  const [clickCount, setClickCount] = useState<number>();

  const animateCookieClick = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!wrapperRef.current) return;

      const x = e.clientX - wrapperRef.current.offsetLeft;
      const y = e.clientY - wrapperRef.current.offsetTop - 110;

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
    },
    [player.aMPC],
  );

  const handleCheatPrevention = useCallback(() => {
    setClickCount((c) => (c || 0) + 1);

    const timeout = setTimeout(() => {
      setClickCount(0);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (clickCount !== 0 || !address) {
      return;
    }

    const saveTimout = setTimeout(() => {
      dispatch({ type: "SAVE_GAME", payload: { address } });
    }, 3000);

    return () => {
      clearTimeout(saveTimout);
    };
  }, [clickCount, address]);

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (!e.isTrusted) {
      alert("Bad click... Get outa the console you script kiddy");
      return;
    }
    if (clickCount && clickCount >= clicksLimit) {
      alert(
        `How can you click more than ${clicksLimit} per second. You must be superman!`,
      );
      return;
    }

    handleCheatPrevention();
    dispatch({ type: "CLICK_COOKIE" });
    animateCookieClick(e);
  };

  return (
    <CookieWrapper>
      <ClickButton
        ref={wrapperRef}
        onClick={handleClick}
        onKeyDown={(e: React.KeyboardEvent<HTMLElement>) => e.preventDefault()}
        disabled={status !== "connected"}
      />
    </CookieWrapper>
  );
};

export default Cookie;
