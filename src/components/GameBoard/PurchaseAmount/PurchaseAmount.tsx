import React, { FC } from "react";
import Tabs, { TabButton } from "../Tabs";
import { useDispatch, useTrackedState } from "../../../context/store";
import { Wrapper } from "./styled";

interface Props {
  mobileVersion?: boolean;
}

const PurchaseAmount: FC<Props> = ({ mobileVersion = false }) => {
  const { purchaseAmount } = useTrackedState();
  const dispatch = useDispatch();

  const setPurchaseAmount = (amount: number | "max") => {
    dispatch({ type: "SET_PURCHASE_AMOUNT", payload: amount });
  };

  return (
    <Wrapper $show={mobileVersion}>
      <Tabs
        mobileVersion={mobileVersion}
        tabs={[
          <TabButton
            key="1x"
            $isSelected={purchaseAmount === 1}
            $mobileVersion={mobileVersion}
            type="button"
            onClick={() => setPurchaseAmount(1)}
          >
            1x
          </TabButton>,
          <TabButton
            key="10x"
            $isSelected={purchaseAmount === 10}
            $mobileVersion={mobileVersion}
            type="button"
            onClick={() => setPurchaseAmount(10)}
          >
            10x
          </TabButton>,
          <TabButton
            key="100x"
            $isSelected={purchaseAmount === 100}
            $mobileVersion={mobileVersion}
            type="button"
            onClick={() => setPurchaseAmount(100)}
          >
            100x
          </TabButton>,
          <TabButton
            key="max"
            $isSelected={purchaseAmount === "max"}
            $mobileVersion={mobileVersion}
            type="button"
            onClick={() => setPurchaseAmount("max")}
          >
            Max
          </TabButton>,
        ]}
      />
    </Wrapper>
  );
};

export default PurchaseAmount;
