import { State } from "../store";

export type SignData = {
  uuid?: string;
  address: string;
  signature?: string;
};

export type SetSignUuidAction = { type: "SET_SIGN_UUID"; payload: string };
export type SetSignSignatureAction = {
  type: "SET_SIGN_SIGNATURE";
  payload: string;
};
export type ResetSignData = { type: "RESET_SIGN_DATA"; payload: string };

export type AddSignDataElementAction = {
  type: "ADD_SIGN_DATA";
  payload: {
    address: string;
    uuid?: string;
    signature?: string;
  };
};

export const resetSignData = (
  state: State,
  payload: ResetSignData["payload"],
) => {
  const signData = { ...state.settings.sign };

  delete signData[payload];

  return {
    ...state,
    settings: {
      ...state.settings,
      sign: {
        ...signData,
      },
    },
  };
};

export const addSignDataElement = (
  state: State,
  payload: AddSignDataElementAction["payload"],
): State => {
  const { address, uuid, signature } = payload;
  const newSignData = {
    ...state.settings.sign,
    [address]: { uuid, signature, address },
  };

  return {
    ...state,
    settings: {
      ...state.settings,
      sign: newSignData,
    },
  };
};
