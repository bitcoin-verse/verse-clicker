import { useCallback, useEffect } from "react";
import { useDispatch, useTrackedState } from "../context/store";
import useInterval from "./useInterval";

const useGameLoop = () => {
  const {
    save,
    settings: { frameRate, recalculateCPS },
    player,
  } = useTrackedState();

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
    if (!save) {
      return;
    }

    dispatch({
      type: "EARN_COOKIE",
      payload: document.hasFocus() ? player.aMPF : player.aMPF * frameRate,
    });
  }, [save, player.aMPF, frameRate]);

  useInterval(gameLoop, document.hasFocus() ? 1000 / frameRate : 1000);
};

export default useGameLoop;
