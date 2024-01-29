import { State } from "../store";

export type SignData = {
  uuid?: string;
  signature?: string;
};

export type SetSignUuidAction = { type: "SET_SIGN_UUID"; payload: string };
export type SetSignSignatureAction = {
  type: "SET_SIGN_SIGNATURE";
  payload: string;
};

export const setSignUuid = (
  state: State,
  payload: SetSignUuidAction["payload"],
): State => {
  return {
    ...state,
    settings: {
      ...state.settings,
      sign: { ...state.settings.sign, uuid: payload },
    },
  };
};

export const setSignSignature = (
  state: State,
  payload: SetSignSignatureAction["payload"],
): State => {
  return {
    ...state,
    settings: {
      ...state.settings,
      sign: { ...state.settings.sign, signature: payload },
    },
  };
};
