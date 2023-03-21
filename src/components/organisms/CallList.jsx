import React, { useMemo } from "react";
import styled from "styled-components";
import { useAppContext } from "../../provider/index.jsx";
import { TABS } from "../../constants/index.js";
import { CallCell, EmptyState } from "../molecules";

const ListContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: relative;
  flex-grow: 1;
  flex-basis: 0;
  padding: 8px 16px;
  overflow-y: scroll;
  min-height: 0;
`;

const DateCell = styled.div`
  font-size: 10px;
  font-weight: 500;
  color: #bababa;
  margin: 16px 0 8px 0;
  letter-spacing: 2px;
  &::after,
  &::before {
    content: "";
    vertical-align: middle;
    display: inline-block;
    width: 50%;
    border-bottom: 2px dotted #e9e9e8;
    margin: 0 5% 0 -55%;
  }
  &::after {
    margin: 0 -55% 0 5%;
  }
`;

const CallList = ({ data }) => {
  const { currentTab, setCurrentActivity } = useAppContext();

  const filteredData = useMemo(() => {
    return data
      .filter(
        (activity) =>
          activity.via &&
          activity.from &&
          activity.to &&
          activity.is_archived === (currentTab === TABS.archived)
      )
      .sort((a, b) => a.created_at - b.created_at);
  }, [data, currentTab]);

  const objectsByDay = {};

  filteredData.forEach((obj) => {
    const day = new Date(obj.created_at).toLocaleDateString();
    if (!objectsByDay[day]) {
      objectsByDay[day] = [];
    }
    objectsByDay[day].push(obj);
  });

  const getFormattedDay = (day) => {
    const date = new Date(day);
    const options = { month: "long", day: "numeric", year: "numeric" };
    return date.toLocaleDateString(undefined, options).toUpperCase();
  };

  return (
    <ListContainer>
      {!Object.keys(objectsByDay).length && <EmptyState />}
      {Object.keys(objectsByDay).map((day) => (
        <React.Fragment key={day}>
          <DateCell>{getFormattedDay(day)}</DateCell>

          {objectsByDay[day].map((callData) => (
            <CallCell callData={callData} key={callData.id} />
          ))}
        </React.Fragment>
      ))}
    </ListContainer>
  );
};

export default CallList;
