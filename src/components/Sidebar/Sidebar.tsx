import React from "react";

import {
  SidebarModal,
  useSidebarModalCtx,
} from "../../context/SidebarModalContext";
import Gear from "../Icons/Gear";
import Handshake from "../Icons/Handshake";
import Trophy from "../Icons/Trophy";
import Modal from "../Modal";
import NotificationContent from "../NotificationModal/Content";
// import Map from "../Icons/Map";
import Leaderboard from "./Leaderboard";
import Settings from "./Settings";
import { SidebarButton, Wrapper } from "./styled";

const getModalContent = (close: () => void, content?: SidebarModal) => {
  switch (content) {
    case "LEADERBOARD":
      return {
        title: "Leaderboard",
        modalContentStyles: { gap: "0", padding: "0 1rem 3rem 1rem" },
        modalDialogStyles: { maxWidth: "31.25rem" },
        component: <Leaderboard />,
      };
    case "WELCOME":
      return {
        title: "Verse Clicker",
        component: <NotificationContent sidebar close={close} />,
      };

    /*   case "tour":
      break; */

    case "SETTINGS":
      return {
        title: "Account Information",
        component: <Settings />,
      };
    default:
      return null;
  }
};

const Sidebar = () => {
  const { modalRef, showModal, close, content, setContent } =
    useSidebarModalCtx();
  const modalContent = getModalContent(close, content);

  return (
    <>
      <Wrapper>
        <SidebarButton
          onClick={() => {
            setContent("LEADERBOARD");
            showModal();
          }}
        >
          <Trophy size="1rem" />
        </SidebarButton>
        <SidebarButton
          onClick={() => {
            setContent("WELCOME");
            showModal();
          }}
        >
          <Handshake size="1rem" />
        </SidebarButton>
        {/* <SidebarButton>
        <Map size="1rem" />
      </SidebarButton> */}
        <SidebarButton
          onClick={() => {
            setContent("SETTINGS");
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
        contentStyles={modalContent?.modalContentStyles}
        dialogStyles={modalContent?.modalDialogStyles}
        overlayClose
      >
        {modalContent?.component}
      </Modal>
    </>
  );
};

export default Sidebar;
