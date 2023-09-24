import { useCallback, useEffect, useState } from "react";
import { useDispatch, useTrackedState } from "../context/store";
import useInterval from "./useInterval";
import { useAccount } from "wagmi";
import { formatNumber } from "../helpers/formatNumber";
import useHasFocus from "./useHasFocus";

const useGameLoop = () => {
  const {
    save,
    settings: { frameRate, recalculateCPS },
    player,
  } = useTrackedState();
  const { address } = useAccount();
  const [newRecalc, setNewRecalc] = useState(false);
  const hasFocus = useHasFocus();
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = `Verse Clicker | ${formatNumber(player.cookies)} Cookies`;
  }, [player.cookies]);

  useEffect(() => {
    if (!save) {
      console.log("NO SAVE FOUND");
      dispatch({ type: "SET_LOADING", payload: false });
      return;
    }

    if (recalculateCPS && save) {
      console.log("Recalculating CPS");
      dispatch({ type: "RECALCULATE_CPS" });
      setNewRecalc(true);
    }
  }, [recalculateCPS, save]);

  const gameLoop = useCallback(() => {
    dispatch({
      type: "EARN_COOKIE",
      payload: hasFocus ? player.aMPF : player.aMPF * frameRate,
    });
  }, [player.aMPF, hasFocus]);

  useInterval(gameLoop, hasFocus ? 1000 / frameRate : 1000);

  useEffect(() => {
    if (newRecalc && address && !recalculateCPS) {
      dispatch({ type: "SAVE_GAME", payload: { address } });
      dispatch({ type: "GET_LEADERBOARD" });
      setNewRecalc(false);
    }
  }, [recalculateCPS, newRecalc]);

  const saveGame = useCallback(() => {
    if (!address) return;
    console.log("Auto saving");
    dispatch({ type: "SAVE_GAME", payload: { address } });
  }, []);

  // save every 30 seconds
  useInterval(saveGame, 1000 * 30);
};

export default useGameLoop;
