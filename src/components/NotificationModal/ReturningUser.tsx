import React from "react";

import { useTrackedState } from "../../context/store";
import { formatNumber } from "../../helpers/formatNumber";
import { formatSeconds } from "../../helpers/formatSeconds";
import { H3 } from "../H3";
import Clock from "../Icons/Clock";
import { Label } from "../Label";
import PointsIcon from "../PointsIcon";
import { Title } from "../Title";
import BonusList from "./BonusList";
import { DataWrapper, Stats, Value } from "./styled";

const ReturningUser = () => {
  const { returnData } = useTrackedState();

  return (
    <>
      <h1>Welcome Back!</h1>
      <DataWrapper>
        <Stats>
          <Title $secondary>You were away for</Title>
          <Value>
            <Clock />
            {returnData && <H3>{formatSeconds(returnData.seconds)}</H3>}
          </Value>
        </Stats>

        <Stats>
          <Title $secondary>You earned </Title>
          <Value>
            <PointsIcon size={28} />
            <H3>{formatNumber(returnData?.cookies)} </H3>
          </Value>
        </Stats>
      </DataWrapper>
      <Label $color="secondary">
        12 hours maximum offline point production
      </Label>

      {returnData?.bonus.burn && returnData.bonus.burn.length > 0 && (
        <BonusList bonusType="burn" txData={returnData.bonus.burn} />
      )}
      {returnData?.bonus.scratcher && returnData.bonus.scratcher.length > 0 && (
        <BonusList
          bonusType="scratcher-claim"
          txData={returnData.bonus.scratcher}
        />
      )}
      {returnData?.bonus.scratcherMint &&
        returnData.bonus.scratcherMint.length > 0 && (
          <BonusList
            bonusType="scratcher-mint"
            txData={returnData.bonus.scratcherMint}
          />
        )}
    </>
  );
};

export default ReturningUser;
