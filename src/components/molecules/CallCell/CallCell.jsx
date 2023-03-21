import React from "react";
import styled from "styled-components";

import {
  Phone,
  ArrowDown,
  ArrowUp,
  Close,
  RecordMail,
} from "@styled-icons/remix-fill";

import ThreeDots from "../ThreeDots.jsx";
import { useAppContext } from "../../../provider/index.jsx";
import {
  CallIconContainer,
  CallAccessory,
  CallCellContainer,
  CellTitle,
  CellSubtitle,
  CallContainer,
  Time,
  AMPM,
} from "./CallCellStyles.js";

const ACCESSORY_SIZE = 12;

const CallIcon = ({ callType, direction }) => {
  const callAccessory = () => {
    if (callType === "missed") {
      return <Close size={ACCESSORY_SIZE} color="red" />;
    } else if (callType !== "voicemail") {
      return direction === "inbound" ? (
        <ArrowDown size={ACCESSORY_SIZE} color="red" />
      ) : (
        <ArrowUp size={ACCESSORY_SIZE} color="red" />
      );
    }
    return null;
  };

  const callIcon = () => {
    return callType === "voicemail" ? (
      <RecordMail size={24} color="#BABABA" />
    ) : (
      <Phone size={24} color="#BABABA" />
    );
  };

  return (
    <CallIconContainer>
      <CallAccessory>{callAccessory()}</CallAccessory>
      {callIcon()}
    </CallIconContainer>
  );
};

const CallCell = ({ callData }) => {
  const { setCurrentActivity } = useAppContext();

  const callDate = new Date(callData.created_at);

  const timeArray = callDate
    .toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    })
    .split(" ");

  const callTitle = () => {
    if (callData.direction === "inbound") {
      return `from ${callData.from}`;
    } else {
      return `to ${callData.from}`;
    }
  };

  const handleOnClickCell = () => {
    setCurrentActivity(callData);
  };

  return (
    <CallCellContainer onClick={handleOnClickCell}>
      <CallIcon callType={callData.call_type} direction={callData.direction} />
      <CallContainer>
        <CellTitle>{callTitle()}</CellTitle>
        <CellSubtitle>tried to call on {callData.via}</CellSubtitle>
      </CallContainer>
      <ThreeDots />
      <Time>{timeArray[0]}</Time>
      <AMPM>{timeArray[1]}</AMPM>
    </CallCellContainer>
  );
};

export default CallCell;
