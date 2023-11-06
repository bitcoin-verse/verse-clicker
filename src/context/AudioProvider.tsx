import React, { FC, PropsWithChildren, createContext, useContext } from "react";
import useSound from "use-sound";
import { PlayFunction } from "use-sound/dist/types";

import laserSfx from "../assets/laser.wav";
import buySfx from "../assets/cha-ching.wav";
import { useTrackedState } from "./store";

const AudioContext = createContext<{
  playLaser?: PlayFunction;
  playBuy?: PlayFunction;
}>({});

export const AudioProvider: FC<PropsWithChildren> = ({ children }) => {
  const { settings } = useTrackedState();
  const [playLaser] = useSound(laserSfx, { soundEnabled: settings.sound });
  const [playBuy] = useSound(buySfx, { soundEnabled: settings.sound });

  return (
    <AudioContext.Provider value={{ playLaser, playBuy }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);
