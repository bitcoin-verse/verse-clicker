import { State } from "../store";

export type SignData = {
  uuid?: string;
  address?: string;
  signature?: string;
};

export type SetSignUuidAction = { type: "SET_SIGN_UUID"; payload: string };
export type SetSignSignatureAction = {
  type: "SET_SIGN_SIGNATURE";
  payload: string;
};

export type AddSignDataElementAction = {
  type: "ADD_SIGN_DATA_ELEMENT";
  payload: SignData;
};

export const addSignDataElement = (
  state: State,
  payload: AddSignDataElementAction["payload"],
): State => {
  const { address } = payload;
  const hasAddress = state.settings.sign?.find((sd) => sd.address === address);

  if (hasAddress) {
    return state;
  }

  const newSignData = [...state.settings.sign, payload];

  return {
    ...state,
    settings: {
      ...state.settings,
      sign: newSignData,
    },
  };
};
