import React, { FC } from "react";
import Tabs, { TabButton } from "../Tabs";
import Buildings from "../../Icons/Buildings";
import Upgrades from "../../Icons/Upgrades";

interface Props {
  setSelectedTab: (tab: number) => void;
  selectedTab: number;
}

const BuildingUpgradeTabs: FC<Props> = ({ setSelectedTab, selectedTab }) => {
  return (
    <>
      <Tabs
        tabs={[
          <TabButton
            key="buildings"
            $isSelected={selectedTab === 0}
            type="button"
            onClick={() => setSelectedTab(0)}
          >
            <Buildings />
            Buildings
          </TabButton>,
          <TabButton
            key="upgrades"
            $isSelected={selectedTab === 1}
            type="button"
            onClick={() => setSelectedTab(1)}
          >
            <Upgrades />
            Upgrades
          </TabButton>,
        ]}
      />
    </>
  );
};

export default BuildingUpgradeTabs;
