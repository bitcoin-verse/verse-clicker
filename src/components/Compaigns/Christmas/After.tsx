import React, { createContext, useContext, useState } from "react";
import { Button } from "../../Button";

import { H3 } from "../../H3";
import { Label } from "../../Label";
import { SidebarModal } from "../../Sidebar/Sidebar";

interface ModalCtxState {
  sidebarModal: SidebarModal | undefined;
}

const ModalCtxContext = createContext<ModalCtxState>({} as ModalCtxState);

export const useSidebarModalCtx = () => useContext(ModalCtxContext);

const After = () => {
  const [sidebarModal, setSidebarModal] = useState<SidebarModal>();

  return (
    <ModalCtxContext.Provider value={{ sidebarModal }}>
      <H3>🏆 Clickmas Has Concluded! 🏆</H3>
      <Label $color="secondary">
        Thank you for participating in Clickmas! The event may be over, but the
        excitement continues. Check out the leaderboard to see where you stand.
        Prizes will be paid out in January.
      </Label>
      <Button $fullWidth onClick={() => setSidebarModal("LEADERBOARD")}>
        🏅 See Leaderboard
      </Button>
    </ModalCtxContext.Provider>
  );
};

export default After;
