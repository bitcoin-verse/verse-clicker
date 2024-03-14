import axios, { AxiosResponse, CancelTokenSource } from "axios";
import React, { FC, useEffect, useMemo, useState } from "react";
import { useAccount } from "wagmi";

import { GameMode } from "../../context/reducers/network";
import Pagination from "../../views/Pagination";
import { H3 } from "../H3";
import Chevron from "../Icons/Chevron";
import Spinner from "../Icons/Spinner";
import Modal, { useModal } from "../Modal";
import EmptyLeaderboard from "./EmptyLeaderboard";
import LeaderboardContent from "./LeaderboardContent";
import OptionsList from "./OptionsList";
import { Button } from "./styled";
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

interface Stats {
  Earned: number;
  Spent: number;
  Clicked: number;
}

interface DataItem {
  address: string;
  stats: Stats;
}

interface Response {
  pageOffset: number;
  pageSize: number;
  total: number;
  data: DataItem[];
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

  const [leaderboardData, setLeaderboardData] = useState<Response>({
    pageOffset: 0,
    pageSize: 0,
    total: 0,
    data: [],
  });
  const [leaderboardItems, setLeaderboardItems] = useState<DataItem[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [pageSize, setPageSize] = useState(20);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Perform any additional logic for fetching data for the new page
  };
  useEffect(() => {
    let cancelRequest: CancelTokenSource | null = null;
    const getLeaderboard = async () => {
      if (cancelRequest !== null) {
        cancelRequest.cancel(
          "A new request has been made, cancelling the previous one.",
        );
      }

      // User might quickly click between leaderboard page numbers, so we need to cancel the previous request
      cancelRequest = axios.CancelToken.source();

      try {
        setLoading(true);
        const { data }: AxiosResponse<Response> = await axios.get<Response>(
          `${
            process.env.REACT_APP_WEBSOCKET_SERVER || "http://localhost:3001/"
          }leaderboard/v2/${selectedGameMode}?pageOffset=${currentPage - 1}&pageSize=${pageSize}`,
          {
            cancelToken: cancelRequest.token,
          },
        );

        setLeaderboardItems(data.data);
        setLeaderboardData(data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled:", error.message);
        } else {
          console.log("error getting leaderboard", error);
          setLoading(false);
        }
      }
      cancelRequest = null;
    };

    getLeaderboard();

    // Cancel the request if the component unmounts
    return () => {
      if (cancelRequest !== null) {
        cancelRequest.cancel("Component unmounted, canceling request");
      }
    };
  }, [selectedGameMode, currentPage, pageSize]);

  return (
    <LeaderboardWrapper>
      <Header>
        <H3>Leaderboard</H3>
        <Button onClick={() => showGameModes()}>
          {selectedGameModeOption?.icon} {selectedGameModeOption?.label}{" "}
          <Chevron rotateDeg={-90} />
        </Button>
        {loading && <Spinner width="2rem" height="2rem" />}
      </Header>
      {leaderboardItems.length ? (
        <TableHeader>
          <div />
          <div>Address</div>
          <div>Earned</div>
          <div>Clicks</div>
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
      <Pagination
        data={leaderboardData}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      <Modal
        modalRef={leaderboardGameModesModalRef}
        title="Select Game"
        overlayClose
        contentStyles={{ gap: "0", padding: "0 0 3rem 0" }}
        dialogStyles={{ maxWidth: "31.25rem" }}
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
