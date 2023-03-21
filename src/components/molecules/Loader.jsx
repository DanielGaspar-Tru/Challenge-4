import React from "react";
import styled from "styled-components";
import { Grid } from "react-loader-spinner";
import { ModalContainer } from "../templates/ModalContainer.jsx";

const LoaderContainer = styled.div`
  color: #4f4f4f;
  text-align: center;
  flex-direction: column;
  display: flex;
  align-items: center;
  position: relative;
`;

const Loader = ({ label }) => (
  <ModalContainer>
    <LoaderContainer>
      <Grid
        visible={true}
        color="#00c700"
        height="56"
        width="56"
        radius={8}
        ariaLabel="blocks-loading"
      />
      <div style={{ marginTop: 16 }}>{label}</div>
    </LoaderContainer>
  </ModalContainer>
);

export default Loader;
