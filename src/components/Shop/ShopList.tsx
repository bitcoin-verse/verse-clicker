import React, { FC } from "react";
import styled, { css } from "styled-components";
import { useTrackedState } from "../../context/store";
import placeholder from "../../assets/placeholder.png";
import { formatNumber } from "../../helpers/formatNumber";
import { useProduction } from "../../hooks/useProduction";
import Star from "../Icons/Star";
import { Text } from "../Text";
import { Title } from "../Title";

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  max-width: calc(100vw);
  overflow-x: auto;
  overflow-y: visible;
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 0;

    gap: 0.5rem;
    flex-direction: column;

    padding-bottom: unset;
    padding-left: unset;
    max-width: unset;
    overflow: visible;
  }
`;

const Button = styled.button<{ $unaffordable?: boolean }>`
  border: none;
  outline: none;
  cursor: pointer;
  overflow: visible;
  border-radius: 0.75rem;
  background: linear-gradient(180deg, #425472 0%, #313e57 100%);

  display: grid;
  column-gap: 0.5rem;
  grid-template-columns: 4rem auto 4rem;
  grid-template-areas: "img content cost" "img content .";

  &:disabled {
    cursor: default;
    filter: blur(0.5rem);
  }

  ${({ $unaffordable }) =>
    $unaffordable &&
    css`
      color: red;
    `}
`;

const Content = styled.div`
  grid-area: content;
  padding: 0.5rem 0;
  text-align: left;
`;

const Amount = styled.div`
  grid-area: cost;
  font-size: 0.875rem;
  font-weight: 600;
  opacity: 0.5;
  color: #d7b98b;
  text-align: right;
  padding: 0.5rem 0.75rem 0.5rem 0;
  display: flex;
  gap: 0.25rem;
  justify-content: flex-end;
  align-items: center;
`;

const Image = styled.img`
  grid-area: img;
  height: 4rem;
  width: 4rem;
  object-fit: cover;
  object-position: center;
  border-radius: 0.75rem;
  background: white;
`;

const ShopList: FC = () => {
  const { buildings, player } = useTrackedState();

  return (
    <Wrapper>
      {buildings.map((building, i) => {
        const [production] = useProduction(building);

        if (building.locked && buildings?.[i - 3]?.locked) return null;

        return (
          <Button
            key={i}
            disabled={building.locked}
            $unaffordable={player.cookies < building.cost}
          >
            <Image
              src={
                building.locked
                  ? placeholder
                  : `${process.env.PUBLIC_URL}/buildings/${building.image}`
              }
              alt={building.name}
            />
            <Content>
              <Title>{building.name}</Title>
              <Text>{building.desc}</Text>
              <Text>
                {formatNumber(production)}/sec
                <span style={{ color: "#899bb5" }}> each building, </span>
                {formatNumber(production * building.amount)}/sec
                <span style={{ color: "#899bb5" }}> overall</span>
              </Text>
            </Content>
            <Amount>
              <Star size={12} />
              {formatNumber(building.cost)}
            </Amount>
          </Button>
        );
      })}
    </Wrapper>
  );
};

export default ShopList;
