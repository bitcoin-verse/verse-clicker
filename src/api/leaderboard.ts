import axios from "axios";

import { LEADERBOARD } from "./endpoints";

export type LeaderboardResponse = {
  address: string;
  cookies: string;
  earned: string;
  spent: string;
  clicked: string;
  lastUpdatedTimestamp: 1695275898;
}[];

export const fetchLeaderboard = async (
  limit: number,
  sortBy: ["clicked" | "earned"],
) => {
  const { data } = await axios.get<LeaderboardResponse>(LEADERBOARD, {
    params: { limit, sortBy: sortBy.join(",") },
  });

  return data;
};
