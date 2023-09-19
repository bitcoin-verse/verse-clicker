import { useState } from "react";
import { createContainer } from "react-tracked";

const initialState = {
  cookies: 0,
  settings: {
    frameRate: 30,
    recalculateCPS: true,
    key: "cookieclicker",
  },
};

const useMyState = () => useState(initialState);

export const { Provider: SharedStateProvider, useTracked: useSharedState } =
  createContainer(useMyState);
