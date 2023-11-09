import React, { useState } from "react";
import { SidebarButton, Wrapper } from "./styled";
import Trophy from "../Icons/Trophy";
import Info from "../Icons/Info";
import Gear from "../Icons/Gear";
// import Map from "../Icons/Map";
import Leaderboard from "./Leaderboard";
import Settings from "./Settings";
import NotificationContent from "../NotificationModal/Content";
import Modal, { useModal } from "../Modal";
import Campaigns from "../Compaigns/Campaigns";

const getModalContent = (close: () => void, content?: string) => {
  switch (content) {
    case "leaderboard":
      return {
        title: "Leaderboard",
        component: <Leaderboard />,
      };
    case "welcome":
      return {
        title: "Verse Clicker",
        component: <NotificationContent sidebar close={close} />,
      };

    /*   case "tour":
      break; */

    case "settings":
      return {
        title: "Account Information",
        component: <Settings />,
      };
    default:
      return null;
  }
};

const Sidebar = () => {
  const { modalRef, showModal, close } = useModal();
  const [content, setContent] = useState<string>();

  const modalContent = getModalContent(close, content);

  return (
    <>
      <Wrapper>
        <Campaigns />
        <SidebarButton
          onClick={() => {
            setContent("leaderboard");
            showModal();
          }}
        >
          <Trophy size="1rem" />
        </SidebarButton>
        <SidebarButton
          onClick={() => {
            setContent("welcome");
            showModal();
          }}
        >
          <Info size="1rem" />
        </SidebarButton>
        {/* <SidebarButton>
        <Map size="1rem" />
      </SidebarButton> */}
        <SidebarButton
          onClick={() => {
            setContent("settings");
            showModal();
          }}
        >
          <Gear size="1rem" />
        </SidebarButton>
      </Wrapper>
      <Modal
        modalRef={modalRef}
        onClose={() => setContent(undefined)}
        title={modalContent?.title}
        overlayClose
      >
        {modalContent?.component}
      </Modal>
    </>
  );
};

export default Sidebar;
