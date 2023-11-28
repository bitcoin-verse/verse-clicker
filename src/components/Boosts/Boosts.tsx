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
import { useNetwork } from "wagmi";
import { Player } from "../../context/reducers/player";

const boostList = (player: Player, isPolygon: boolean) => [
  {
    id: "hold",
    unlocked: player.verseHolder,
    show: true,
    label: "Hold",
    description: "10x clicks",
  },
  {
    id: "farm",
    unlocked: player.isFarming || player.isStaking,
    show: !isPolygon,
    label: "Farm",
    description: "2x production",
  },
  {
    id: "burn",
    unlocked: true,
    show: !isPolygon,
    label: "Burn",
    description: "Skip time",
  },
  {
    id: "scratcher",
    unlocked: !!player.bonus,
    show: isPolygon,
    label: "Scratcher",
    description: "",
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
  const { chain } = useNetwork();

  const modalContent = getModalContent(content);
  const isPolygon = chain?.id === 137;

  return (
    <Wrapper $mobileVersion={mobileVersion}>
      <Content>
        <H4>Boost your points</H4>
        <BoostTiles>
          {boostList(player, isPolygon).map(
            (boost) =>
              boost.show && (
                <BoostButton
                  key={boost.id}
                  onClick={() => {
                    setContent(boost.id);
                    showModal();
                  }}
                >
                  <Label $unlocked={boost.unlocked} $cta={boost.id === "burn"}>
                    {boost.id === "burn" ? (
                      <Clock size={16} />
                    ) : (
                      <>{boost.unlocked ? <Check /> : <Lock />}</>
                    )}
                    {boost.label}
                  </Label>
                  <Boost $unlocked={boost.unlocked}>{boost.description}</Boost>
                </BoostButton>
              ),
          )}
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
