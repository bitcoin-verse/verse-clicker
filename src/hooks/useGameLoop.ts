import { useCallback, useEffect, useState } from "react";
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
  const [newRecalc, setNewRecalc] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!save) {
      console.log("NO SAVE FOUND, NO LOOP FOR YOU!!");
      dispatch({ type: "SET_LOADING", payload: false });
      return;
    }

    if (recalculateCPS) {
      console.log("recalculate cps");
      dispatch({ type: "RECALCULATE_CPS" });
      setNewRecalc(true);
    }
  }, [recalculateCPS, save]);

  const gameLoop = useCallback(() => {
    dispatch({
      type: "EARN_COOKIE",
      payload: player.aMPF,
    });
  }, [player.aMPF, frameRate]);

  useInterval(gameLoop, 1000 / frameRate);

  useEffect(() => {
    if (newRecalc && address && !recalculateCPS) {
      dispatch({ type: "SAVE_GAME", payload: { address } });
      setNewRecalc(false);
    }
  }, [recalculateCPS, newRecalc]);

  const saveGame = useCallback(() => {
    if (!address) return;
    dispatch({ type: "SAVE_GAME", payload: { address } });
  }, []);

  // save every 30 seconds
  useInterval(saveGame, 1000 * 30);
};

export default useGameLoop;
