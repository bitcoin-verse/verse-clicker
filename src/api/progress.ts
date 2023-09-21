import axios from "axios";
import { PROGRESS } from "./endpoints";

export const getProgress = async (address: string) => {
  const { data } = await axios.get<{
    address: string;
    progressBase64: string;
    lastUpdatedTimestamp: string;
  }>(`${PROGRESS}/${address}`);

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

  return data;
};
