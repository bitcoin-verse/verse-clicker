import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { useAccount, useDisconnect } from "wagmi";

import { useAudio } from "../../../context/AudioProvider";
import SidebarModalProvider from "../../../context/SidebarModalContext";
import { useSocketCtx } from "../../../context/SocketContext";
import { useTrackedState } from "../../../context/store";
import { formatNumber } from "../../../helpers/formatNumber";
import Campaign from "../../Campaigns/Campaign";
import Sidebar from "../../Sidebar";
import { ButtonWrapper, ClickButton, CookieWrapper, CpcClick } from "./styled";

const Cookie: FC = () => {
  const { playLaser, playBells, playSymbol } = useAudio();
  const { socket } = useSocketCtx();

  const { disconnect } = useDisconnect();
  const { status } = useAccount();
  const wrapperRef = useRef<HTMLButtonElement | null>(null);

  const { player, gameMode } = useTrackedState();
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
          +{formatNumber(player.cpc, 0)}
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

    if (!socket) return;
    if (!isTrusted) {
      alert("Bad click... Get outa the console you script kiddy");
      return;
    }

    const isAutoClick = clickCount >= 29 ? true : false;

    setClickCount((c) => c + 1);

    if (isAutoClick || !isTrusted) {
      alert("Macro detected, disconnecting...");
      disconnect();
      return;
    }


    socket.emit("click");
    animateCookieClick(e);

    if (gameMode === "Christmas" && playBells) playBells();
    if (gameMode === "LunarNewYear" && playSymbol) playSymbol();
    if (gameMode !== "Christmas" && gameMode !== "LunarNewYear" && playLaser)
      playLaser();
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
      <SidebarModalProvider>
        <Campaign />
        <Sidebar />
      </SidebarModalProvider>
    </CookieWrapper>
  );
};

export default Cookie;
