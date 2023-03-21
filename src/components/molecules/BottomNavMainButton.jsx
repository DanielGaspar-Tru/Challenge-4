import React from "react";
import styled from "styled-components";
import { Grid } from "@styled-icons/remix-fill";

const ButtonContainer = styled.div`
  position: absolute;
  border-radius: 50%;
  border: 1px solid #bababa;
  padding: 4px;
  background-color: white;
  cursor: pointer;
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.1);
  transform: translateY(-16px);
`;

const IconContainer = styled.div`
  background: linear-gradient(#00c600, #00b100);
  border-radius: 50%;
  padding: 12px;
  &:hover {
    background: linear-gradient(#00b600, #00a100);
  }
  &:active {
    background: linear-gradient(#00a600, #009100);
  }
`;

const Pad = styled(Grid)`
  width: 32px;
  color: white;
  fill: white;
  min-width: 16px;
`;

const BottomNavMainButton = () => {
  return (
    <ButtonContainer>
      <IconContainer>
        <Pad color="white" />
      </IconContainer>
    </ButtonContainer>
  );
};

export default BottomNavMainButton;
