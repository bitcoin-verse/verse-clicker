import React, { FC } from "react";
import styled, { css } from "styled-components";
import { useDispatch, useTrackedState } from "../../context/store";
import placeholder from "../../assets/placeholder.png";
import { formatNumber } from "../../helpers/formatNumber";
import { useProduction } from "../../hooks/useProduction";
import Star from "../Icons/Star";

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
  grid-template-areas: "img name cost" "img desc ." "img info .";

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

const Name = styled.div`
  grid-area: name;
  font-size: 1rem;
  font-weight: 600;
  text-align: left;
  color: white;
  flex: 1;
`;

const Desc = styled.div`
  grid-area: desc;
  font-size: 1rem;
  font-weight: 600;
  text-align: left;
  color: white;
  flex: 1;
`;

const Amount = styled.div`
  grid-area: cost;
  font-size: 0.875rem;
  font-weight: 600;
  opacity: 0.5;
  color: #d7b98b;
  text-align: right;
  padding: 0.5rem 0.75rem 0.5rem 0;
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

const Info = styled.div`
  grid-area: info;
`;

const Stat = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
  color: #899bb5;

  & > span {
    color: #ffffff;
  }
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
            <Name>{building.name}</Name>
            <Desc>{building.desc}</Desc>
            <Info>
              <Stat>
                <span>{formatNumber(production)}/sec each building,</span>
              </Stat>
              <Stat>
                <span>
                  {formatNumber(production * building.amount)}/sec total
                </span>
              </Stat>
            </Info>
            <Amount>
              <Star size={16} />
              {building.amount}
            </Amount>
          </Button>
        );
      })}
    </Wrapper>
  );
};

export default ShopList;
