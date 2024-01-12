import React, { FC } from "react";

import { Button } from "../Button";
import { H3 } from "../H3";
import { Label } from "../Label";
import Modal, { useModal } from "../Modal";
import FinalLeaderboard from "./FinalLeaderboard";
import { AfterCampaignJson } from "./types";

interface Props {
  content: AfterCampaignJson;
}

const After: FC<Props> = ({ content }) => {
  const { modalRef, showModal } = useModal();

  return (
    <>
      <H3>{content.title}</H3>
      <Label $color="secondary">{content.label2}</Label>

      <Button
        $fullWidth
        onClick={() => {
          showModal();
        }}
      >
        {content.leaderboard}
      </Button>

      <Modal modalRef={modalRef} title="Clickmas Leaderboard">
        <FinalLeaderboard />
      </Modal>
    </>
  );
};

export default After;
