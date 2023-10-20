import { useEffect, useState } from "react";
import { Player } from "../context/reducers/player";
import { Leaderboard } from "../context/reducers/leaderboard";
import { BuildingData } from "../context/reducers/building";
import { useSocketCtx } from "../context/SocketContext";
import { useDispatch } from "../context/store";

const useSocketEvents = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const { socket } = useSocketCtx();

  useEffect(() => {
    const onInfo = (payload: Player) => {
      setLoading(false);
      dispatch({ type: "SET_PLAYER_DATA", payload });
    };

    const onLeaderboard = (payload: Leaderboard) => {
      dispatch({ type: "SET_LEADERBOARD", payload });
    };

    const onBuildingsData = (payload: BuildingData[]) => {
      dispatch({ type: "UPDATE_BUILDINGS", payload });
    };

    socket.on("info", onInfo);
    socket.on("leaderboard", onLeaderboard);
    socket.on("buildings_data", onBuildingsData);

    return () => {
      socket.off("info", onInfo);
      socket.off("leaderboard", onLeaderboard);
      socket.off("buildings_data", onBuildingsData);
    };
  }, []);

  return { loading, setLoading };
};

export default useSocketEvents;
