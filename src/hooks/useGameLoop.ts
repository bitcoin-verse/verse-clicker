import { useCallback, useEffect } from "react";
import { useDispatch, useTrackedState } from "../context/store";
import useInterval from "./useInterval";
import { useAccount } from "wagmi";

const useGameLoop = () => {
  const {
    save,
    settings: { frameRate, recalculateCPS },
    player,
  } = useTrackedState();
  const { address } = useAccount();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!save) {
      console.log("NO SAVE FOUND, NO LOOP FOR YOU!!");
      return;
    }

    if (recalculateCPS) {
      console.log("recalculate cps");
      dispatch({ type: "RECALCULATE_CPS" });
    }
  }, [recalculateCPS, save]);

  const gameLoop = useCallback(() => {
    dispatch({
      type: "EARN_COOKIE",
      payload: player.aMPF,
    });
  }, [player.aMPF, frameRate]);

  useInterval(gameLoop, 1000 / frameRate);

  const saveGame = useCallback(() => {
    if (!address) return;
    dispatch({ type: "SAVE_GAME", payload: { address } });
  }, []);

  // save every 30 seconds
  useInterval(saveGame, 1000 * 30);
};

export default useGameLoop;
