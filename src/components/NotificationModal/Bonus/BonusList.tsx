import React, { FC } from "react";

import { TxData } from "../../../context/reducers/returnData";
import { colors } from "../../colors";
import Burn from "./Data/Burn";
import ScratcherClaim from "./Data/ScratcherClaim";
import ScratcherMint from "./Data/ScratcherMint";

/* const sample = {
  bonusBurnTxs: [
    {
      date: 1701136345476,
      burnAmount: 10000,
      txHash:
        "0x96c370bd3a32aa3658405b0ff74205ed91870efc1aded99389a90d451f4b5227",
      bonusAmount: 35396640,
    },
    {
      date: 1701136345476,
      burnAmount: 10000,
      txHash:
        "0x96c370bd3a32aa3658405b0ff74205ed91870efc1aded99389a90d451f4b5227",
      bonusAmount: 35396640,
    },
    {
      date: 1701136345476,
      burnAmount: 10000,
      txHash:
        "0x96c370bd3a32aa3658405b0ff74205ed91870efc1aded99389a90d451f4b5227",
      bonusAmount: 35396640,
    },
  ],
}; */

interface Props {
  txData: TxData[];
  bonusType: "burn" | "scratcher-claim" | "scratcher-mint";
}

const BonusList: FC<Props> = ({ txData, bonusType }) => {
  return (
    <>
      <hr
        style={{ width: "100%", border: `0.025rem solid ${colors.shade60}` }}
      />
      {bonusType === "burn" && <Burn txData={txData} />}
      {bonusType === "scratcher-claim" && <ScratcherClaim txData={txData} />}
      {bonusType === "scratcher-mint" && <ScratcherMint txData={txData} />}
    </>
  );
};

export default BonusList;
