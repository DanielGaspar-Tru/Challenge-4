import React from "react";
import styled from "styled-components";

import { CheckboxBlankCircle } from "@styled-icons/remix-fill";

const CheckBoxStyled = styled(CheckboxBlankCircle)`
  color: gray;
  margin-top: 2px;
  margin-bottom: 2px;
`;

const ThreeDotsContainer = styled.div`
  margin-right: 4px;
  margin-left: 4px;
  flex-direction: column;
  display: flex;
`;

const ThreeDots = () => {
  return (
    <ThreeDotsContainer>
      <CheckBoxStyled size={2} />
      <CheckBoxStyled size={2} />
      <CheckBoxStyled size={2} />
    </ThreeDotsContainer>
  );
};

export default ThreeDots;
