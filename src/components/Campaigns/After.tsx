import React, { FC } from "react";

import { Button } from "../Button";
import { H3 } from "../H3";
import { Label } from "../Label";
import Modal, { useModal } from "../Modal";
import FinalLeaderboard from "./FinalLeaderboard";

const After: FC = () => {
  const { modalRef, showModal } = useModal();

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
          showModal();
        }}
      >
        🏅 See Leaderboard
      </Button>

      <Modal modalRef={modalRef} title="Clickmas Leaderboard">
        <FinalLeaderboard />
      </Modal>
    </>
  );
};

export default After;
