import axios from "axios";
import { PROGRESS } from "./endpoints";

export const getProgress = async (address: string) => {
  const { data } = await axios.get<string>(`${PROGRESS}/${address}`);

  console.log(data);

  return data;
};

export const saveProgress = async (address: string, progressBase64: string) => {
  const { data } = await axios.post(PROGRESS, {
    address,
    progressBase64,
  });

  return data;
};
