import React, { FC } from "react";
import Building from "../../classes/Building";
import { formatNumber } from "../../helpers/formatNumber";
import styled from "styled-components";
import { useProduction } from "../../hooks/useProduction";
import InfoTitle from "../InfoTitle";

const InfoWrapper = styled.div`
  padding: 0 0 1rem 0;
  display: flex;
  gap: 0.5rem;

  @media (min-width: 768px) {
    flex-direction: column;
    gap: 0.25rem;
  }
`;

const Stat = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
  color: #899bb5;

  & > span {
    color: #ffffff;
  }
`;

interface Props {
  building: Building;
}

const BuildingInfo: FC<Props> = ({ building }) => {
  const [production] = useProduction(building);

  return (
    <InfoWrapper>
      <InfoTitle style={{ flex: 1 }}>Buy</InfoTitle>

      <Stat>
        Production: <span>{formatNumber(production)} CPS each</span>
      </Stat>
      <Stat>
        Total: <span>{formatNumber(production * building.amount)} CPS</span>
      </Stat>
    </InfoWrapper>
  );
};

export default BuildingInfo;
