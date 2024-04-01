import React, { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAccount, useChainId, useDisconnect, useSwitchNetwork } from "wagmi";

import { GameMode } from "../../../context/reducers/network";
import { useDispatch } from "../../../context/store";
import { getNetworkImage } from "../../../helpers/getNetworkImage";
import { Button } from "../../Button";

const gameModeList: {
  id: GameMode;
  label: string;
  icon: string;
  networks: number[];
}[] = [
  {
    id: "Ethereum",
    label: "Ethereum",
    icon: getNetworkImage(1),
    networks: [1],
  },
  {
    id: "Polygon",
    label: "Polygon",
    icon: getNetworkImage(137),
    networks: [137],
  },
];

export const getGameModeDetails = (game: GameMode) => {
  return gameModeList.find((i) => i.id === game);
};

interface Props {
  close: () => void;
}

const isAvailabe = (arr1: number[], arr2: number[]) => {
  return arr1.filter((e) => arr2.indexOf(e) !== -1).length > 0;
};

const GameModesList: FC<Props> = ({ close }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { isConnected, connector } = useAccount();
  const { disconnect } = useDisconnect();
  const chainId = useChainId();
  const { switchNetworkAsync } = useSwitchNetwork();

  const [availableNetworks, setAvailableNetworks] = useState<number[]>([]);

  useEffect(() => {
    const getAvailableNetworks = async () => {
      const provider = await connector?.getProvider();
      if (provider?.session) {
        const namespaceChains: string[] =
          provider.session?.namespaces?.eip155?.chains || [];

        setAvailableNetworks(
          namespaceChains.map((c) => Number(c.replace("eip155:", ""))),
        );
      } else {
        setAvailableNetworks([1, 137]);
      }
    };

    getAvailableNetworks();
  }, [connector]);

  return (
    <>
      {gameModeList.map((game) => {
        return (
          <Button
            key={game.label}
            $size="small"
            $design="tertiary"
            disabled={
              isConnected &&
              !game.networks.includes(chainId) &&
              !isAvailabe(game.networks, availableNetworks)
            }
            onClick={async () => {
              try {
                if (
                  !game.networks.includes(chainId) &&
                  switchNetworkAsync !== undefined
                ) {
                  await switchNetworkAsync(
                    game.networks.find((n) => n !== chainId),
                  );
                }
                const search = new URLSearchParams(location.search);
                search.set("campaign", game.id);
                const url = `/?${search.toString()}`;

                navigate(url, {
                  replace: true,
                });

                dispatch({ type: "SET_GAME_MODE", payload: game.id });
                close();
              } catch (error) {}
            }}
          >
            <img src={game.icon} alt={game.id} height={24} width={24} />
            <div
              style={{
                marginLeft: "0.5rem",
                color: "inherit",
                background: "inherit",
              }}
            >
              {game.label}
            </div>
          </Button>
        );
      })}
      <div />
      {isConnected && (
        <Button
          $size="small"
          $design="secondary"
          onClick={() => {
            disconnect();
          }}
        >
          Disconnect
        </Button>
      )}
    </>
  );
};

export default GameModesList;
