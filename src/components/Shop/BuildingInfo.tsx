import React, { FC } from "react";
import Building from "../../classes/Building";
import { formatNumber } from "../../helpers/formatNumber";
import styled from "styled-components";

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
          {formatNumber(building.multiplier * building.amount)} /{" "}
          {building.name}
        </b>
      </div>
      <div>
        <Title>Total: </Title>
        <b>{formatNumber(building.amount * building.multiplier)} cookie/s.</b>
      </div>
    </InfoWrapper>
  );
};

export default BuildingInfo;
