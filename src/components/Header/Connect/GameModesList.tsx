import React, { FC, useEffect, useState } from "react";
import { useAccount, useChainId, useSwitchNetwork } from "wagmi";

import lnySrc from "../../../assets/lanturn.png";
import { GameMode } from "../../../context/reducers/network";
import { useDispatch } from "../../../context/store";
import { getNetworkImage } from "../../../helpers/getNetworkImage";
import { Button } from "../../Button";

const gameModeList: {
  id: GameMode;
  label: string;
  icon: string;
  network: number;
}[] = [
  { id: "Ethereum", label: "Ethereum", icon: getNetworkImage(1), network: 1 },
  { id: "Polygon", label: "Polygon", icon: getNetworkImage(137), network: 137 },
  {
    id: "LunarNewYear",
    label: "Lunar New Year",
    icon: lnySrc,
    network: 137,
  },
  /*   {
    id: "LunarNewYear",
    label: "Lunar New Year (ETH)",
    icon: lnySrc,
    network: 1,
  }, */
];

export const getGameModeDetails = (game: GameMode) => {
  return gameModeList.find((i) => i.id === game);
};

interface Props {
  close: () => void;
}

const GameModesList: FC<Props> = ({ close }) => {
  const dispatch = useDispatch();
  const { isConnected, connector } = useAccount();
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
      {gameModeList.map((game) => (
        <Button
          key={game.label}
          $size="small"
          $design="tertiary"
          disabled={
            isConnected &&
            chainId !== game.network &&
            !availableNetworks.includes(game.network)
          }
          onClick={async () => {
            try {
              if (
                chainId !== game.network &&
                switchNetworkAsync !== undefined
              ) {
                await switchNetworkAsync(game.network);
              }
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
      ))}
    </>
  );
};

export default GameModesList;
