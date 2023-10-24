import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useAccount } from "wagmi";
import { createRoot } from "react-dom/client";

import { useDispatch, useTrackedState } from "../../context/store";
import { formatNumber } from "../../helpers/formatNumber";

import cookieBite from "../../assets/cookie-bite.png";
import verseMoon from "../../assets/verse-moon.png";
import nomSound from "../../assets/nom.wav";
import { useSocketCtx } from "../../context/SocketContext";

const CookieWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ClickButton = styled.button`
  position: relative;
  max-width: 16.25rem;
  margin: 3.75rem;
  aspect-ratio: 1/1;
  width: 100%;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  background-image: url(${verseMoon});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;

  &:hover {
    background-size: 99%;
  }

  &:active {
    background-size: 101%;
  }

  &:after {
    content: "";
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

export const ButtonWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  text-align: center;
`;

const Cookie: FC = () => {
  const { socket } = useSocketCtx();
  const dispatch = useDispatch();
  const { status, address } = useAccount();
  const wrapperRef = useRef<HTMLButtonElement | null>(null);

  const { player } = useTrackedState();
  const [clickCount, setClickCount] = useState<number>();

  const [macroDetected, setMacroDetected] = useState(false);

  const animateCookieClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!wrapperRef.current) return;

      const x = e.clientX - wrapperRef.current.getBoundingClientRect().left;
      const y = e.clientY - wrapperRef.current.getBoundingClientRect().top;

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
          {formatNumber(player.cpc)}
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
    [player.cpc],
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

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!e.isTrusted) {
      alert("Bad click... Get outa the console you script kiddy");
      return;
    }
    if (clickCount && clickCount >= 30) {
      if (macroDetected) {
        alert("You were warned! wiping your game...");
        dispatch({ type: "RESET_GAME" });
      } else {
        alert(
          `CHEAT DETECTED!! No one can click that fast. Do it again and your save will be wiped`,
        );
        setMacroDetected(true);
      }
      return;
    }

    handleCheatPrevention();
    socket.emit("click");
    animateCookieClick(e);
    new Audio(nomSound).play();
  };

  return (
    <CookieWrapper>
      <ButtonWrapper>
        <ClickButton
          type="button"
          ref={wrapperRef}
          onClick={handleClick}
          onKeyDown={(e: React.KeyboardEvent<HTMLElement>) =>
            e.preventDefault()
          }
          disabled={status !== "connected"}
        />
      </ButtonWrapper>
    </CookieWrapper>
  );
};

export default Cookie;
