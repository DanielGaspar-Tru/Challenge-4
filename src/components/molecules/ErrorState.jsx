import React from "react";
import styled from "styled-components";
import { EmotionSad } from "@styled-icons/remix-line";

const ErrorStateContainer = styled.div`
  color: #4f4f4f;
  text-align: center;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
`;

const EmptyState = () => (
  <ErrorStateContainer>
    <EmotionSad color="#BABABA" size={64} />
    <div style={{ marginTop: 16 }}>Something went wrong</div>
  </ErrorStateContainer>
);

export default EmptyState;
