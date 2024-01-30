import React from "react";
import { useTrackedState } from "src/context/store";

import MultipleBonus from "./MultipleBonus";
import SingleBonus from "./SingleBonus";

const BonusContent = () => {
  const { bonusData } = useTrackedState();

  return (
    <>
      {bonusData.length === 1 ? (
        <SingleBonus bonusData={bonusData[0]} />
      ) : (
        <MultipleBonus bonusData={bonusData} />
      )}
    </>
  );
};

export default BonusContent;
