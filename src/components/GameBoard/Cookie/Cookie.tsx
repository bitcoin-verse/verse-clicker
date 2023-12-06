import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { useAccount, useDisconnect } from "wagmi";
import { createRoot } from "react-dom/client";

import { useTrackedState } from "../../../context/store";
import { formatNumber } from "../../../helpers/formatNumber";

import { useSocketCtx } from "../../../context/SocketContext";
import { ButtonWrapper, ClickButton, CookieWrapper, CpcClick } from "./styled";
import { useAudio } from "../../../context/AudioProvider";
import Sidebar from "../../Sidebar";

const Cookie: FC = () => {
  const { playLaser } = useAudio();
  const { socket } = useSocketCtx();

  const { disconnect } = useDisconnect();
  const { status } = useAccount();
  const wrapperRef = useRef<HTMLButtonElement | null>(null);

  const { player } = useTrackedState();
  const [clickCount, setClickCount] = useState<number>(0);

  const countTimer = useRef<NodeJS.Timeout>();

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
            fontWeight: 500,
            fontSize: "0.875rem",
            left: x,
            top: y,
          }}
        >
          +{formatNumber(player.cpc)}
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

  useEffect(() => {
    countTimer.current = setInterval(() => {
      setClickCount(0);
    }, 1000);

    return () => {
      clearInterval(countTimer.current);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { isTrusted } = e;

    if (!isTrusted) {
      alert("Bad click... Get outa the console you script kiddy");
      return;
    }

    const isAutoClick = clickCount >= 30 ? true : false;

    setClickCount((c) => c + 1);

    if (isAutoClick || !isTrusted) {
      alert("Macro detected, disconnecting...");
      disconnect();
      return;
    }

    socket.emit("click");
    animateCookieClick(e);

    if (playLaser) playLaser();
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
      <Sidebar />
    </CookieWrapper>
  );
};

export default Cookie;
