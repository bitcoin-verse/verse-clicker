import { useCallback, useEffect, useState } from "react";
import { useDispatch, useTrackedState } from "../context/store";
import useInterval from "./useInterval";
import { useAccount } from "wagmi";
import { formatNumber } from "../helpers/formatNumber";

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
    document.title = `Verse Clicker | ${formatNumber(player.cookies)} Cookies`;
  }, [player.cookies]);

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

  useInterval(gameLoop, document.hasFocus() ? 1000 / frameRate : 1000);

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
