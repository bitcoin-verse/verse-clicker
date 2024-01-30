import React, { FC } from "react";
import { BonusData } from "src/context/reducers/bonusData";
import { useChainId } from "wagmi";

import { getTxExplorerLink } from "../../helpers/getExplorerLink";
import { H3 } from "../H3";
import { Label } from "../Label";
import LinkButton from "../LinkButton";
import ScratcherLink from "../Links/ScratcherLink";
import { Value } from "./styled";

interface Props {
  bonusData: BonusData[];
}

const MultipleBonus: FC<Props> = ({ bonusData }) => {
  const chainId = useChainId();

  return (
    <>
      {bonusData.map(
        (data) =>
          data.bonusType === "scratcher-mint" && (
            <>
              <H3>Scratcher Bonus</H3>
              <Label $color="secondary">
                Scratcher minted in <ScratcherLink />
              </Label>
              <Value>Bonus {data.bonusBase}% production added</Value>
              <LinkButton href={getTxExplorerLink(chainId, data.txHash)} newTab>
                View on Polyscan
              </LinkButton>
            </>
          ),
      )}
    </>
  );
};

export default MultipleBonus;
