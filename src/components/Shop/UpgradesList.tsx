import React, { FC } from "react";
import styled from "styled-components";
import UpgradeButton from "./UpgradeButton";
import useUpgradesList from "../../hooks/useUpgradesList";

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  max-width: calc(100vw);
  overflow-x: auto;
  overflow-y: visible;
  padding: 1rem;
  width: 100%;

  @media (min-width: 768px) {
    padding: 0;
    padding-right: 1rem;

    gap: 0.5rem;
    flex-direction: column;

    padding-bottom: unset;
    padding-left: unset;
    max-width: unset;
    overflow: visible;
  }
`;

const NextUpgrade = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
  padding: 0 1.25rem;
  text-align: center;
`;

interface Props {}

const UpgradesList: FC<Props> = () => {
  const upgrades = useUpgradesList();

  return (
    <Wrapper>
      {upgrades.map((upgrade) => {
        return <UpgradeButton key={upgrade.name} upgrade={upgrade} />;
      })}
      <NextUpgrade>Unlock upgrades by purchasing more buildings</NextUpgrade>
    </Wrapper>
  );
};

export default UpgradesList;
