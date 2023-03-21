import React from "react";
import styled from "styled-components";
import { ThreeDots } from "../molecules";
import { TABS } from "../../constants/index.js";
import { useAppContext } from "../../provider/index.jsx";

const TopNavContainer = styled.div`
  border-bottom: none;
  position: relative;
  display: flex;
  align-items: center;
  flex-grow: 1;
  padding-left: 16px;
  #selector {
    ${(props) =>
      props.currentTab === TABS.inbox ? "left: 20%;" : "left: 65%;"}
    bottom: 0;
    position: absolute;
    width: 21%;
    height: 3px;
    background-color: #ff4500;
    transition: 0.2s;
    z-index: 2;
  }
  &::after {
    content: "";
    border: 1px solid #e9e9e8;
    border-bottom: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fdfdfc;
    z-index: -1;
    border-top-left-radius: 12px;

    -ms-transform: skewX(-35deg);
    -webkit-transform: skewX(-35deg);
    transform: skewX(-35deg);

    -ms-transform-origin: 100% 100%;
    -webkit-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
  }
`;

const TabButton = styled.button`
  color: #bababa;
  transition: color 0.1s;
  font-weight: 600;
  font-family: "Poppins";
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  position: relative;
  text-align: center;
  font-size: 12px;
  height: 50px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 0;
  ${(props) => props.isActive && "color: #4f4f4f;"}
`;

const InboxButton = styled(TabButton)`
  padding-left: 20px;
  padding-right: 10px;
`;

const TopNav = () => {
  const { currentTab, setCurrentTab } = useAppContext();

  const handleClickTab = (tab) => {
    if (tab != currentTab) {
      setCurrentTab(tab);
    }
  };

  return (
    <TopNavContainer currentTab={currentTab}>
      <div id="selector"></div>
      <InboxButton
        isActive={currentTab === TABS.inbox}
        onClick={() => handleClickTab(TABS.inbox)}
      >
        Activities
      </InboxButton>
      <ThreeDots />
      <TabButton
        isActive={currentTab === TABS.archived}
        onClick={() => handleClickTab(TABS.archived)}
      >
        Archived
      </TabButton>
    </TopNavContainer>
  );
};

export default TopNav;
