import React from "react";
import styled from "styled-components";
import { Archive } from "@styled-icons/remix-line";

const ArchiveButtonContainer = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px solid #ff4000;
  background-color: white;
  border-radius: 8px;
  padding: 8px 0 8px 20px;
  margin: 16px 16px 0 16px;
  transition: box-shadow 0.4s ease, transform 0.1s ease, border-color 0.4s ease;
  font-weight: 600;
  color: #4f4f4f;
  &:hover {
    box-shadow: 1px 2px 8px #d5d5d5;
    border-color: #00c700;
    background-color: #00c70033;
  }
  &:active {
    background-color: #00c70033;
    transform: translateY(2px);
    box-shadow: none;
  }
  ${(props) => props.disabled && "pointer-events: none; opacity: 0.5;"}
`;

const ArchiveCallContainer = styled(ArchiveButtonContainer)`
  margin: 24px 0;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
`;

const ArchiveButton = ({ label, onClick }) => {
  return (
    <ArchiveButtonContainer onClick={onClick}>
      <Archive color="#4f4f4f" size={24} style={{ marginRight: 8 }} />
      {label}
    </ArchiveButtonContainer>
  );
};

const ArchiveCall = ({ label, onClick, disabled = false }) => {
  return (
    <ArchiveCallContainer onClick={onClick} disabled={disabled}>
      <Archive color="#4f4f4f" size={24} style={{ marginRight: 8 }} />
      {label}
    </ArchiveCallContainer>
  );
};

export { ArchiveButton, ArchiveCall };
