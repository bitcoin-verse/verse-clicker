import React from "react";
import { colors } from "src/components/colors";

import { useTrackedState } from "../../../context/store";
import { formatNumber } from "../../../helpers/formatNumber";
import { formatSeconds } from "../../../helpers/formatSeconds";
import { H3 } from "../../H3";
import Clock from "../../Icons/Clock";
import { Label } from "../../Label";
import PointsIcon from "../../PointsIcon";
import { Title } from "../../Title";
import MultipleBonus from "../Bonus/MultipleBonus";
import { DataWrapper, Stats, Value } from "../styled";

const ReturningUser = () => {
  const { returnData } = useTrackedState();
  const hasBonus =
    returnData?.bonus?.burn.length !== 0 ||
    returnData?.bonus?.scratcher.length !== 0 ||
    returnData?.bonus?.scratcherMint.length !== 0;

  return (
    <>
      <h1>Welcome Back!</h1>
      <DataWrapper>
        <Stats>
          <Title $secondary>You were away for</Title>
          <Value>
            <Clock />
            <H3>
              {returnData && returnData.seconds > 1
                ? formatSeconds(returnData.seconds)
                : "1s"}
            </H3>
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

      {hasBonus && (
        <hr
          style={{ width: "100%", border: `0.025rem solid ${colors.shade60}` }}
        />
      )}
      {returnData?.bonus.burn && returnData.bonus.burn.length > 0 && (
        <MultipleBonus bonusType="burn" txData={returnData.bonus.burn} />
      )}
      {returnData?.bonus.scratcher && returnData.bonus.scratcher.length > 0 && (
        <MultipleBonus
          bonusType="scratcher"
          txData={returnData.bonus.scratcher}
        />
      )}
      {returnData?.bonus.scratcherMint &&
        returnData.bonus.scratcherMint.length > 0 && (
          <MultipleBonus
            bonusType="scratcher-mint"
            txData={returnData.bonus.scratcherMint}
          />
        )}
    </>
  );
};

export default ReturningUser;
