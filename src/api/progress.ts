import axios from "axios";
import { PROGRESS } from "./endpoints";

export const getProgress = async (address: string) => {
  try {
    const { data } = await axios.get<string>(`${PROGRESS},${address}`);

    console.log(data);

    return data;
  } catch (error) {
    console.log("error getting progress", error);
  }
};

export const saveProgress = async (address: string, progressBase64: string) => {
  try {
    const { data } = await axios.post(PROGRESS, {
      address,
      progressBase64,
    });

    console.log(data);
    return data;
  } catch (error) {
    console.log("error saving progress", error);
  }
};
