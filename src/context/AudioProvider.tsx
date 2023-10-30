import React, { FC, PropsWithChildren, createContext, useContext } from "react";
import useSound from "use-sound";
import { PlayFunction } from "use-sound/dist/types";

import laserSfx from "../assets/laser.wav";
import buySfx from "../assets/cha-ching.wav";

const AudioContext = createContext<{
  playLaser?: PlayFunction;
  playBuy?: PlayFunction;
}>({});

export const AudioProvider: FC<PropsWithChildren> = ({ children }) => {
  const [playLaser] = useSound(laserSfx);
  const [playBuy] = useSound(buySfx);

  return (
    <AudioContext.Provider value={{ playLaser, playBuy }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);
