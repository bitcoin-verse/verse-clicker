import React, { FC } from "react";
import { useSidebarModalCtx } from "../../../context/SidebarModalContext";
import { Button } from "../../Button";

import { H3 } from "../../H3";
import { Label } from "../../Label";

interface Props {
  closeCampaign: () => void;
}

const After: FC<Props> = ({ closeCampaign }) => {
  const { setContent, showModal } = useSidebarModalCtx();

  return (
    <>
      <H3>🏆 Clickmas Has Concluded! 🏆</H3>
      <Label $color="secondary">
        Thank you for participating in Clickmas! The event may be over, but the
        excitement continues. Check out the leaderboard to see where you stand.
        Prizes will be paid out in January.
      </Label>
      <Button
        $fullWidth
        onClick={() => {
          closeCampaign();
          setContent("LEADERBOARD");
          showModal();
        }}
      >
        🏅 See Leaderboard
      </Button>
    </>
  );
};

export default After;
