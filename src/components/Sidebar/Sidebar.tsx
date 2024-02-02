import React from "react";
import { useNavigate } from "react-router-dom";

import {
  SidebarModal,
  useSidebarModalCtx,
} from "../../context/SidebarModalContext";
import Gear from "../Icons/Gear";
import Handshake from "../Icons/Handshake";
import Trophy from "../Icons/Trophy";
import Modal from "../Modal";
import NotificationContent from "../NotificationModal/Content";
import Settings from "./Settings";
import { SidebarButton, Wrapper } from "./styled";

const getModalContent = (close: () => void, content?: SidebarModal) => {
  switch (content) {
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
  const navigate = useNavigate();
  const { modalRef, showModal, close, content, setContent } =
    useSidebarModalCtx();
  const modalContent = getModalContent(close, content);

  return (
    <>
      <Wrapper>
        <SidebarButton
          onClick={() => {
            navigate("/leaderboard");
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
        overlayClose
      >
        {modalContent?.component}
      </Modal>
    </>
  );
};

export default Sidebar;
