import React, { useState, useMemo } from "react";

import { Phone, User, Settings5, RecordCircle } from "@styled-icons/remix-line";
import { BottomNavigationMainButton } from "../../molecules";

import {
  BottomNavContainer,
  ButtonContainer,
  IconStyleWrapper,
  Badge,
  ButtonsLeft,
  ButtonsRight,
} from "./BottomNavStyles.js";

const Button = ({ onClick, icon, badge, isActive }) => {
  return (
    <ButtonContainer isActive={isActive} onClick={onClick}>
      {!!badge && <Badge isActive={isActive}>{badge}</Badge>}
      <IconStyleWrapper>{icon}</IconStyleWrapper>
    </ButtonContainer>
  );
};

const BottomNav = ({ data }) => {
  const [activeButton, setActiveButton] = useState(0);

  const filteredData = useMemo(() => {
    if (!data) return [];
    return data.filter(
      (activity) =>
        activity.via &&
        activity.from &&
        activity.to &&
        activity.call_type === "missed"
    );
  }, [data]);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <BottomNavContainer>
      <ButtonsLeft>
        <Button
          badge={filteredData.length}
          icon={<Phone />}
          isActive={activeButton === 0}
          onClick={() => handleButtonClick(0)}
        />
        <Button
          icon={<User />}
          onClick={() => handleButtonClick(1)}
          isActive={activeButton === 1}
        />
      </ButtonsLeft>
      <BottomNavigationMainButton />
      <ButtonsRight>
        <Button
          icon={<Settings5 />}
          onClick={() => handleButtonClick(2)}
          isActive={activeButton === 2}
          key="settings"
        ></Button>
        <Button
          icon={<RecordCircle />}
          onClick={() => handleButtonClick(3)}
          isActive={activeButton === 3}
        ></Button>
      </ButtonsRight>
    </BottomNavContainer>
  );
};

export default BottomNav;
