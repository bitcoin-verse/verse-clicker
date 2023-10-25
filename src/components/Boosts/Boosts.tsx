import React, { FC, useState } from "react";

import { useTrackedState } from "../../context/store";

import Lock from "../Icons/Lock";
import Modal, { useModal } from "../Modal";
import { H4 } from "../H4";

import Burn from "./Burn";
import Hold from "./Hold";
import Farm from "./Farm";

import {
  BoostTiles,
  BoostButton,
  Label,
  Boost,
  Wrapper,
  Content,
} from "./styled";
import Check from "../Icons/Check";

const boostList = (unlocked: boolean) => [
  {
    id: "hold",
    unlocked: unlocked,
    label: "Hold",
  },
  {
    id: "burn",
    unlocked: unlocked,
    label: "Burn",
  },
  {
    id: "farm",
    unlocked: unlocked,
    label: "Farm",
  },
];

const getModalContent = (content?: string) => {
  switch (content) {
    case "burn":
      return {
        title: "Burn to earn (BETA)",
        component: <Burn />,
      };
    case "hold":
      return {
        title: "Hold",
        component: <Hold />,
      };
    case "farm":
      return {
        title: "Double CPS!",
        component: <Farm />,
      };
    default:
      return null;
  }
};

const Boosts: FC = () => {
  const [content, setContent] = useState<string>();
  const { modalRef, showModal } = useModal();
  const { player } = useTrackedState();

  const modalContent = getModalContent(content);

  return (
    <Wrapper>
      <Content>
        <H4>Boost your points</H4>
        <BoostTiles>
          {boostList(player.verseHolder).map((boost) => (
            <BoostButton
              key={boost.id}
              $unlocked={boost.unlocked}
              onClick={() => {
                if (!boost.unlocked) {
                  setContent(boost.id);
                  showModal();
                }
              }}
            >
              <Label $unlocked={boost.unlocked}>
                {boost.unlocked ? <Check /> : <Lock />}
                {boost.label}
              </Label>
              <Boost $unlocked={boost.unlocked}>
                {!boost.unlocked && "Unlock"} 10x boost
              </Boost>
            </BoostButton>
          ))}
        </BoostTiles>
      </Content>
      <Modal
        modalRef={modalRef}
        onClose={() => setContent(undefined)}
        title={modalContent?.title}
      >
        {modalContent?.component}
      </Modal>
    </Wrapper>
  );
};

export default Boosts;
