import { useEffect, useState } from "react";
import { Player } from "../context/reducers/player";
import { LeaderboardEvent } from "../context/reducers/leaderboard";
import { BuildingData } from "../context/reducers/building";
import { useSocketCtx } from "../context/SocketContext";
import { useDispatch } from "../context/store";
import { ReturnData } from "../context/reducers/returnData";
import { BonusData } from "../context/reducers/bonusData";

const useSocketEvents = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const { socket } = useSocketCtx();

  useEffect(() => {
    const onInfo = (payload: Player) => {
      setLoading(false);
      dispatch({ type: "SET_PLAYER_DATA", payload });
    };

    const onLeaderboard = (payload: LeaderboardEvent) => {
      let addresses;
      let stats;

      // TODO: cleanup once backend is updated
      if ("players" in payload) {
        // handle new payload structure
        addresses = payload.players.map((i) => i.address);
        stats = payload.players.map((i) => i.stats);
      } else {
        addresses = payload.map((i) => i.address);
        stats = payload.map((i) => i.stats);
      }

      if ("timestamp" in payload) {
        dispatch({
          type: "SET_LEADERBOARD_UPDATED",
          payload: payload.timestamp,
        });
      }

      dispatch({ type: "SET_LEADERBOARD_STATS", payload: stats });
      dispatch({ type: "SET_LEADERBOARD_ADDRESSES", payload: addresses });
    };

    const onBuildingsData = (payload: BuildingData[]) => {
      dispatch({ type: "UPDATE_BUILDINGS", payload });
    };

    const onWelcomeBack = (data: ReturnData) => {
      dispatch({ type: "SET_RETURN_DATA", payload: data });
    };

    const onBonusNotif = (data: BonusData) => {
      dispatch({ type: "SET_BONUS_DATA", payload: data });
    };

    socket.on("welcome_back", onWelcomeBack);
    socket.on("bonus", onBonusNotif);
    socket.on("info", onInfo);
    socket.on("leaderboard", onLeaderboard);
    socket.on("buildings_data", onBuildingsData);

    return () => {
      socket.off("welcome_back", onWelcomeBack);
      socket.on("bonus", onBonusNotif);
      socket.off("info", onInfo);
      socket.off("leaderboard", onLeaderboard);
      socket.off("buildings_data", onBuildingsData);
    };
  }, []);

  return { loading, setLoading };
};

export default useSocketEvents;
