import React, { FC } from "react";
import Building from "../../classes/Building";
import { formatNumber } from "../../helpers/formatNumber";

interface Props {
  building: Building;
}

const BuildingInfo: FC<Props> = ({ building }) => {
  return (
    <>
      <h4>{building.name}</h4>
      <div>
        You have {building.amount} {building.name}
      </div>
      <div>
        Each {building.name} produces{" "}
        {formatNumber(building.multiplier * building.amount)} cookies.
      </div>
      <div>
        All of your {building.name} combines produces{" "}
        {formatNumber(building.amount * building.multiplier)} cookies.
      </div>
    </>
  );
};

export default BuildingInfo;
