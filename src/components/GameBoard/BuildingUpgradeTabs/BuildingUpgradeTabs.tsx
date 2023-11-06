import React, { FC } from "react";
import Tabs, { TabButton } from "../../Tabs";
import Upgrades from "../../Icons/Upgrades";
import Mouse from "../../Icons/Mouse";

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
            <Mouse size={32} />
            Tools
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
