import React, { FC, useCallback, useRef, useState } from "react";
import { useAccount } from "wagmi";
import { createRoot } from "react-dom/client";
import useSound from "use-sound";

import { useDispatch, useTrackedState } from "../../../context/store";
import { formatNumber } from "../../../helpers/formatNumber";

import laserSfx from "../../../assets/laser.wav";
import { useSocketCtx } from "../../../context/SocketContext";
import { ButtonWrapper, ClickButton, CookieWrapper, CpcClick } from "./styled";

const Cookie: FC = () => {
  const [play] = useSound(laserSfx);
  const { socket } = useSocketCtx();
  const dispatch = useDispatch();
  const { status } = useAccount();
  const wrapperRef = useRef<HTMLButtonElement | null>(null);

  const { player, settings } = useTrackedState();
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

  const handleCheatPrevention = useCallback(() => {
    setClickCount((c) => (c || 0) + 1);

    const timeout = setTimeout(() => {
      setClickCount(0);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

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

    if (settings.sound) {
      play();
    }
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
