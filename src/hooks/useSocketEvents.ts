import { useEffect, useState } from "react";
import { Player } from "../context/reducers/player";
import { LeaderboardEvent } from "../context/reducers/leaderboard";
import { BuildingData } from "../context/reducers/building";
import { useSocketCtx } from "../context/SocketContext";
import { useDispatch } from "../context/store";
import { ReturnData } from "../context/reducers/returnData";

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
      const addresses = payload.map((i) => i.address);
      const stats = payload.map((i) => i.stats);
      dispatch({ type: "SET_LEADERBOARD_STATS", payload: stats });
      dispatch({ type: "SET_LEADERBOARD_ADDRESSES", payload: addresses });
    };

    const onBuildingsData = (payload: BuildingData[]) => {
      dispatch({ type: "UPDATE_BUILDINGS", payload });
    };

    const onWelcomeBack = (data: ReturnData) => {
      dispatch({ type: "SET_RETURN_DATA", payload: data });
    };

    socket.on("welcome_back", onWelcomeBack);
    socket.on("info", onInfo);
    socket.on("leaderboard", onLeaderboard);
    socket.on("buildings_data", onBuildingsData);

    return () => {
      socket.off("welcome_back", onWelcomeBack);
      socket.off("info", onInfo);
      socket.off("leaderboard", onLeaderboard);
      socket.off("buildings_data", onBuildingsData);
    };
  }, []);

  return { loading, setLoading };
};

export default useSocketEvents;
