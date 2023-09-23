import React, { FC } from "react";
import Building from "../../classes/Building";
import { formatNumber } from "../../helpers/formatNumber";
import styled from "styled-components";
import { useProduction } from "../../hooks/useProduction";

const InfoWrapper = styled.div`
  padding: 0 0 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  border-bottom: 1.5px solid #dedede;
  margin-bottom: 1rem;
`;

const InfoTitle = styled.div`
  font-weight: 0.875rem;
  line-height: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
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
      <InfoTitle>Buy</InfoTitle>
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
