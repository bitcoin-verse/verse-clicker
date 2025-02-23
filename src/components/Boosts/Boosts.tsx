import React, { FC, Suspense, lazy, useState } from "react";
import { useNetwork } from "wagmi";

import { GameMode } from "../../context/reducers/network";
import { Player } from "../../context/reducers/player";
import { useTrackedState } from "../../context/store";
import { H4 } from "../H4";
import Check from "../Icons/Check";
import Clock from "../Icons/Clock";
import Lock from "../Icons/Lock";
import Modal, { useModal } from "../Modal";
import {
  Boost,
  BoostButton,
  BoostTiles,
  Content,
  Label,
  Wrapper,
} from "./styled";

const Farm = lazy(() => import("./Modals/Farm"));
const Hold = lazy(() => import("./Modals/Hold"));
const HoldRewards = lazy(() => import("./Modals/HoldRewards"));
const HoldLunar = lazy(() => import("./Modals/HoldLunar"));
const Scratcher = lazy(() => import("./Modals/Scratcher"));
const ScratcherLunar = lazy(() => import("./Modals/ScratcherLunar"));
const ScratcherMint = lazy(() => import("./Modals/ScratcherMint"));
const Burn = lazy(() => import("./Modals/Burn"));
const Lounge = lazy(() => import("./Modals/Lounge"));

const boostList = (player: Player, network: GameMode) => {
  switch (network) {
    case "Polygon":
      return [
        {
          id: "hold",
          unlocked: player.verseHolder,
          label: "Hold",
          description: "10x clicks",
        },
        {
          id: "scratcher",
          unlocked: true,
          label: "Scratch & Win",
          description: "Up to 1,000,000x",
        },
      ];
    case "Rewards":
      return [
        {
          id: "hold-rewards",
          unlocked: player.verseHolder,
          label: "Hold",
          description: "Hold 100K+ VERSE for 2x clicks, 1M+ for 5x, and 2M+ for 10x.",
        },
      ];
    case "Ethereum":
    case "Sepolia":
    default:
      return [
        {
          id: "hold",
          unlocked: player.verseHolder,
          label: "Hold",
          description: "10x clicks",
        },
        {
          id: "farm",
          unlocked: player.isFarming || player.isStaking,
          label: "Farm",
          description: "2x production",
        },
        {
          id: "burn",
          unlocked: true,
          label: "Burn",
          description: "Skip time",
        },
      ];
  }
};

const getModalContent = (close: () => void, content?: string) => {
  switch (content) {
    case "burn":
      return {
        title: "Burn",
        component: <Burn />,
      };
    case "hold":
      return {
        title: "Hold",
        component: <Hold rate={10} />,
      };
    case "hold-lunar":
      return {
        title: "Hold",
        component: <HoldLunar rate={8} />,
      };
    case "hold-rewards":
      return {
        title: "Hold",
        component: <HoldRewards/>,
      };
    case "farm":
      return {
        title: "Farms/Staking",
        component: <Farm />,
      };
    case "scratcher":
      return {
        title: "Verse Scratcher",
        component: <Scratcher />,
      };
    case "scratcher-lunar":
      return {
        title: "Scratcher Claim",
        component: <ScratcherLunar />,
      };
    case "scratcher-mint":
      return {
        title: "Scratcher Buy",
        component: <ScratcherMint />,
      };
    case "lounge":
      return {
        title: "Verse Lounge",
        component: <Lounge close={close} />,
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
  const { modalRef, showModal, close } = useModal();
  const { chain } = useNetwork();
  const { player, gameMode } = useTrackedState();

  const modalContent = getModalContent(close, content);
  const interactiveBoosts = [
    "burn",
    "scratcher",
    "scratcher-mint",
    "scratcher-lunar",
  ];

  return (
    <Wrapper $mobileVersion={mobileVersion}>
      <Content>
        <H4>Boost your points</H4>
        <BoostTiles>
          {chain &&
            boostList(player, gameMode).map((boost) => (
              <BoostButton
                key={boost.id}
                onClick={() => {
                  setContent(boost.id);
                  showModal();
                }}
              >
                <Label
                  $unlocked={boost.unlocked}
                  $cta={interactiveBoosts.includes(boost.id)}
                >
                  <div>
                    {interactiveBoosts.includes(boost.id) ? (
                      <Clock size={14} />
                    ) : (
                      <>
                        {boost.unlocked ? (
                          <Check size={14} />
                        ) : (
                          <Lock size={14} />
                        )}
                      </>
                    )}
                  </div>
                  <div>{boost.label}</div>
                </Label>
                <Boost $unlocked={boost.unlocked}>{boost.description}</Boost>
              </BoostButton>
            ))}
        </BoostTiles>
      </Content>
      <Modal
        modalRef={modalRef}
        onClose={() => setContent(undefined)}
        title={modalContent?.title}
      >
        <Suspense>{modalContent?.component}</Suspense>
      </Modal>
    </Wrapper>
  );
};

export default Boosts;
