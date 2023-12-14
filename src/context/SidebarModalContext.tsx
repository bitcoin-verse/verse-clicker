import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

import { useModal } from "../components/Modal";

export type SidebarModal = "LEADERBOARD" | "WELCOME" | "SETTINGS";

interface ModalCtxState {
  showModal: () => void;
  close: () => void;
  modalRef: React.RefObject<HTMLDialogElement>;
  content: SidebarModal | undefined;
  setContent: (content: SidebarModal | undefined) => void;
}

const ModalCtxContext = createContext<ModalCtxState>({} as ModalCtxState);

export const useSidebarModalCtx = () => useContext(ModalCtxContext);

const SidebarModalProvider: FC<PropsWithChildren> = ({ children }) => {
  const { modalRef, showModal, close } = useModal();
  const [content, setContent] = useState<SidebarModal>();

  return (
    <ModalCtxContext.Provider
      value={{ modalRef, showModal, close, content, setContent }}
    >
      {children}
    </ModalCtxContext.Provider>
  );
};

export default SidebarModalProvider;
