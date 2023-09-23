import React, { FC, useCallback } from "react";
import Upgrade from "../../classes/Upgrade";
import styled from "styled-components";
import { useDispatch, useTrackedState } from "../../context/store";
import { formatNumber } from "../../helpers/formatNumber";
import Building from "../../classes/Building";

const Button = styled.button`
  background: indianred;
  box-sizing: border-box;
  border: none;
  outline: none;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid grey;
  cursor: pointer;
  align-items: center;

  flex: 1;

  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 0.25rem;
  grid-template-areas: "title price" "desc price";
  color: black;

  &:disabled {
    cursor: default;
    background: lightgrey;
    color: darkgrey;
  }
`;

const Title = styled.div`
  grid-area: title;
  font-weight: 600;
  font-size: 1rem;
  text-align: left;
  color: inherit;
`;

const Description = styled.div`
  grid-area: desc;
  font-size: 0.75rem;
  text-align: left;
  color: inherit;
`;
const Price = styled.div`
  grid-area: price;
  font-size: 1.25rem;
  font-weight: 600;
  text-align: right;
  color: inherit;
`;

const UpgrdesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NextUpgrade = styled.div`
  color: black;

  background: pink;
  padding: 1rem;
  font-weight: 600;
  text-align: center;
  border-radius: 1rem;
`;

interface Props {
  building: Building;
  upgrades: Upgrade[];
}

const UpgradesList: FC<Props> = ({ upgrades, building }) => {
  const dispatch = useDispatch();
  const { player } = useTrackedState();
  const buyUpgrade = useCallback(
    (upgrade: Upgrade) => {
      dispatch({
        type: "BUY_UPGRADE",
        payload: {
          buildingName: building.name,
          upgrade,
        },
      });
    },
    [building.name],
  );

  return (
    <UpgrdesWrapper>
      <h3>UPGRADES</h3>
      {upgrades.map((upgrade, i) => {
        if (upgrade.owned) return null;
        if (building.amount >= upgrade.limit) {
          return (
            <Button
              key={i}
              onClick={() => {
                if (player.cookies < upgrade.cost) return;
                buyUpgrade(upgrade);
              }}
              disabled={player.cookies < upgrade.cost}
            >
              <Title>{upgrade.name}</Title>
              <Description>{upgrade.desc}</Description>
              <Price>{formatNumber(upgrade.cost)}</Price>
            </Button>
          );
        }

        if (
          building.amount >= upgrades[i - 1]?.limit ||
          upgrades[i - 1] === undefined
        ) {
          return (
            <NextUpgrade key={upgrade.name}>
              Next upgrade available in {upgrade.limit - building.amount} more{" "}
              {building.name}(s)
            </NextUpgrade>
          );
        }
      })}
    </UpgrdesWrapper>
  );
};

export default UpgradesList;
