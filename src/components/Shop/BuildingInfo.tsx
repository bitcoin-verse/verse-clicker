import React, { FC } from "react";
import Building from "../../classes/Building";
import { formatNumber } from "../../helpers/formatNumber";
import styled from "styled-components";
import { useProduction } from "../../hooks/useProduction";

const InfoWrapper = styled.div`
  padding: 0 0 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-bottom: 1px solid black;
  margin-bottom: 1rem;
`;

const Title = styled.span`
  opacity: 0.45;
`;

interface Props {
  building: Building;
}

const BuildingInfo: FC<Props> = ({ building }) => {
  const [production] = useProduction(building);

  return (
    <InfoWrapper>
      <h3>{building.name} Information</h3>
      <div>
        <Title>Owned: </Title>
        <b>
          {building.amount} {building.name}(s)
        </b>
      </div>
      <div>
        <Title>Production: </Title>
        <b>
          {formatNumber(production)} per second per {building.name}
        </b>
      </div>
      <div>
        <Title>Upgrades Owned: </Title>
        <b>{building.upgrades.filter((u) => u.owned).length}</b>
      </div>
      <div>
        <Title>Total: </Title>
        <b>
          {formatNumber(production * building.amount * building.baseEffect)}{" "}
          cookie/s.
        </b>
      </div>
    </InfoWrapper>
  );
};

export default BuildingInfo;
