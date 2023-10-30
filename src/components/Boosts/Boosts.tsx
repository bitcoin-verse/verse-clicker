import React, { FC, useState } from "react";

import { useTrackedState } from "../../context/store";

import Lock from "../Icons/Lock";
import Modal, { useModal } from "../Modal";
import { H4 } from "../H4";

import Burn from "./Modals/Burn";
import Hold from "./Modals/Hold";
import Farm from "./Modals/Farm";

import {
  BoostTiles,
  BoostButton,
  Label,
  Boost,
  Wrapper,
  Content,
} from "./styled";
import Check from "../Icons/Check";
import Clock from "../Icons/Clock";

const boostList = (verseHolder: boolean, isFarmsOrStaking: boolean) => [
  {
    id: "hold",
    unlocked: verseHolder,
    label: "Hold",
    desciption: "10x clicks",
  },
  {
    id: "burn",
    unlocked: true,
    label: "Burn",
    desciption: "Skip time",
  },
  {
    id: "farm",
    unlocked: isFarmsOrStaking,
    label: "Farm",
    desciption: "2x production",
  },
];

const getModalContent = (content?: string) => {
  switch (content) {
    case "burn":
      return {
        title: "Burn",
        component: <Burn />,
      };
    case "hold":
      return {
        title: "Hold",
        component: <Hold />,
      };
    case "farm":
      return {
        title: "Farms/Staking",
        component: <Farm />,
      };
    default:
      return null;
  }
};

interface Props {
  mobileVersion?: boolean;
}

const Boosts: FC<Props> = ({ mobileVersion }) => {
  const [content, setContent] = useState<string>();
  const { modalRef, showModal } = useModal();
  const { player } = useTrackedState();

  const modalContent = getModalContent(content);
  const isFarmsOrStaking = player.isFarming || player.isStaking;

  return (
    <Wrapper $mobileVersion={mobileVersion}>
      <Content>
        <H4>Boost your points</H4>
        <BoostTiles>
          {boostList(player.verseHolder, isFarmsOrStaking).map((boost) => (
            <BoostButton
              key={boost.id}
              onClick={() => {
                setContent(boost.id);
                showModal();
              }}
            >
              <Label $unlocked={boost.unlocked}>
                {boost.id === "burn" ? (
                  <Clock size={16} />
                ) : (
                  <>{boost.unlocked ? <Check /> : <Lock />}</>
                )}
                {boost.label}
              </Label>
              <Boost $unlocked={boost.unlocked}>{boost.desciption}</Boost>
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
