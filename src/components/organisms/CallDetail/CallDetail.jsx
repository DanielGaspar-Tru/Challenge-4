import React from "react";
import styled from "styled-components";
import { useAppContext } from "../../../provider/index.jsx";
import { Close } from "@styled-icons/remix-fill";
import { ArchiveCall, Loader } from "../../molecules";
import { setArchived } from "../../../services/api.js";
import { useMutation, useQueryClient } from "react-query";
import { formatDuration } from "../../../utils/index.js";
import { ModalContainer } from "../../templates/ModalContainer.jsx";
import { QUERIES } from "../../../constants/index.js";
import {
  CallDetailContainer,
  CloseButton,
  ModalTitle,
  CallDate,
  CallDetailCellContainer,
  CallDetailCellDots,
  CallDetailCellLabel,
  CallDetailCellValue,
  CallType,
} from "./CallDetailStyles.js";

const CallDetailCell = ({ label, value }) => (
  <CallDetailCellContainer>
    <CallDetailCellLabel>{label}</CallDetailCellLabel>
    <CallDetailCellDots />
    <CallDetailCellValue>{value}</CallDetailCellValue>
  </CallDetailCellContainer>
);

const CallDetail = () => {
  const { currentActivity, setCurrentActivity, toggleArchived } =
    useAppContext();

  const queryClient = useQueryClient();
  const archiveMutation = useMutation(
    (activity) => {
      return setArchived(activity.id, !activity.is_archived);
    },
    {
      onSuccess: () => {
        toggleArchived();
        queryClient.invalidateQueries(QUERIES.calls);
      },
    }
  );

  const callDate = new Date(currentActivity.created_at);
  const duration = formatDuration(currentActivity.duration);
  const time = callDate.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const date = callDate
    .toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
    .toUpperCase();

  const handleArchiveActivity = () => {
    archiveMutation.mutateAsync(currentActivity);
  };

  return (
    <ModalContainer>
      <CallDetailContainer>
        {archiveMutation.isLoading && <Loader />}
        <CloseButton>
          <Close
            size={24}
            color="#4f4f4f"
            onClick={() => setCurrentActivity(null)}
          />
        </CloseButton>
        <ModalTitle>Call Details</ModalTitle>
        <CallDate>{`${date} (${time})`}</CallDate>
        <CallType>
          {currentActivity.call_type} {currentActivity.direction} call
        </CallType>
        <CallDetailCell label="From" value={currentActivity.from} />
        <CallDetailCell label="To" value={currentActivity.to} />
        <CallDetailCell label="Via" value={currentActivity.via} />
        {currentActivity.call_type !== "missed" && (
          <CallDetailCell label="Duration" value={duration} />
        )}
        <ArchiveCall
          onClick={handleArchiveActivity}
          label={
            currentActivity.is_archived ? "Unarchive call" : "Archive call"
          }
          disabled={archiveMutation.isLoading}
        />
      </CallDetailContainer>
    </ModalContainer>
  );
};

export default CallDetail;
