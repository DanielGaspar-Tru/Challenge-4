import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  flex-direction: column;
  flex: 1;
  align-items: stretch;
  justify-content: center;
  display: flex;
  background-color: #fdfdfc;
  border-top: 1px solid #e9e9e8;
`;

const MainContainer = (props) => {
  return <Container>{props.children}</Container>;
};

export default MainContainer;
