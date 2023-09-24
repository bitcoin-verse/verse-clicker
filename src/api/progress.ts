import axios from "axios";
import { PROGRESS } from "./endpoints";

type GetProgressResponse = {
  address: string;
  progressBase64: string;
  cookies: string;
  earned: string;
  spent: string;
  clicked: string;
  lastUpdatedTimestamp: number;
  isVerseHolder: boolean;
  verseBalance: string;
};

export const getProgress = async (address: string) => {
  const { data } = await axios.get<GetProgressResponse>(
    `${PROGRESS}/${address}`,
  );

  return data;
};

export const saveProgress = async (address: string, progressBase64: string) => {
  const { data } = await axios.post<{
    address: string;
    progressBase64: string;
  }>(PROGRESS, {
    address,
    progressBase64,
  });

  console.log("Game Saved");
  return data;
};
