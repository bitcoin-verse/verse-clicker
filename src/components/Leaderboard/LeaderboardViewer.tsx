import axios from "axios";
import React, { FC, useEffect, useMemo, useState } from "react";
import { useAccount } from "wagmi";

import { GameMode } from "../../context/reducers/network";
import { H3 } from "../H3";
import { getGameModeDetails } from "../Header/Connect/GameModesList";
import Chevron from "../Icons/Chevron";
import Modal, { useModal } from "../Modal";
import EmptyLeaderboard from "./EmptyLeaderboard";
import LeaderboardContent from "./LeaderboardContent";
import OptionsList from "./OptionsList";
import { Button, ButtonContent } from "./styled";
import { Header, LeaderboardWrapper, TableHeader } from "./styled";

interface Props {
  selectedGameMode: GameMode;
  gameModes: {
    label: string;
    value: GameMode;
    icon?: React.ReactNode;
    tags?: string[];
  }[];
  setGameMode: (gameMode: GameMode) => void;
}

const LeaderboardViewer: FC<Props> = ({
  gameModes,
  selectedGameMode,
  setGameMode,
}) => {
  const { address } = useAccount();
  const selectedGameModeOption = useMemo(
    () => gameModes.find((gm) => gm.value === selectedGameMode),
    [selectedGameMode],
  );
  const {
    modalRef: leaderboardGameModesModalRef,
    showModal: showGameModes,
    close: closeGameModes,
  } = useModal();

  const [leaderboardItems, setLeaderboardItems] = useState<
    {
      address: string;
      stats: {
        Clicked: number;
        Earned: number;
        Spent: number;
      };
    }[]
  >([]);

  useEffect(() => {
    const getLeaderboard = async () => {
      try {
        const { data } = await axios.get(
          `${
            process.env.REACT_APP_WEBSOCKET_SERVER || "http://localhost:3001/"
          }leaderboard/${selectedGameMode}`,
        );

        setLeaderboardItems(data.players);
      } catch (error) {
        console.log("error getting leaderboard", error);
      }
    };

    getLeaderboard();
  }, [selectedGameMode]);

  return (
    <LeaderboardWrapper>
      <Header>
        <H3>Leaderboard</H3>
        <Button onClick={() => showGameModes()}>
          {selectedGameModeOption?.icon} {selectedGameModeOption?.label}{" "}
          <Chevron rotateDeg={-90} />
        </Button>
      </Header>
      {leaderboardItems.length ? (
        <TableHeader>
          <div />
          <div>Address</div>
          <div>Clicks</div>
          <div>Earned</div>
        </TableHeader>
      ) : (
        <></>
      )}
      {leaderboardItems.length ? (
        <LeaderboardContent
          leaderboardItems={leaderboardItems}
          userAddress={address}
        />
      ) : (
        <EmptyLeaderboard />
      )}
      <Modal
        modalRef={leaderboardGameModesModalRef}
        title="Select Game"
        overlayClose
        contentStyles={{ gap: "0", padding: "0 0 5rem 0" }}
      >
        <OptionsList
          options={gameModes}
          onOptionClick={(option) => {
            setGameMode(option.value);
            closeGameModes();
          }}
        />
      </Modal>
    </LeaderboardWrapper>
  );
};

export default LeaderboardViewer;
