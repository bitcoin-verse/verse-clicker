import React from "react";
import Tabs, { TabButton } from "../Tabs";
import { useDispatch, useTrackedState } from "../../../context/store";
import { Wrapper } from "./styled";

const PurchaseAmount = () => {
  const { purchaseAmount } = useTrackedState();
  const dispatch = useDispatch();

  const setPurchaseAmount = (amount: number | "max") => {
    dispatch({ type: "SET_PURCHASE_AMOUNT", payload: amount });
  };

  return (
    <Wrapper>
      <Tabs
        tabs={[
          <TabButton
            key="1x"
            $isSelected={purchaseAmount === 1}
            type="button"
            onClick={() => setPurchaseAmount(1)}
          >
            1x
          </TabButton>,
          <TabButton
            key="10x"
            $isSelected={purchaseAmount === 10}
            type="button"
            onClick={() => setPurchaseAmount(10)}
          >
            10x
          </TabButton>,
          <TabButton
            key="100x"
            $isSelected={purchaseAmount === 100}
            type="button"
            onClick={() => setPurchaseAmount(100)}
          >
            100x
          </TabButton>,
          <TabButton
            key="max"
            $isSelected={purchaseAmount === "max"}
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
