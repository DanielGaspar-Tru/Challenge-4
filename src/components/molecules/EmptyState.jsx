import React from "react";
import styled from "styled-components";
import { OpenArm } from "@styled-icons/remix-line";

const EmptyStateContainer = styled.div`
  color: #4f4f4f;
  text-align: center;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
`;

const EmptyState = () => (
  <EmptyStateContainer>
    <OpenArm color="#BABABA" size={64} />
    <div style={{ marginTop: 16 }}>The list is empty.</div>
  </EmptyStateContainer>
);

export default EmptyState;
