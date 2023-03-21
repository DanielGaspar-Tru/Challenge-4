import styled from "styled-components";

const CallIconContainer = styled.div`
  position: relative;
`;

const CallAccessory = styled.div`
  position: absolute;
  right: 0;
  top: -2px;
`;

const CallCellContainer = styled.li`
  box-sizing: border-box;
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px solid #e9e9e8;
  background-color: white;
  border-radius: 8px;
  padding: 16px 0 16px 20px;
  margin: 4px 0;
  transition: box-shadow 0.4s ease, transform 0.1s ease, border-color 0.4s ease;

  &:hover {
    box-shadow: 1px 2px 8px #d5d5d5;
    border-color: #00c700;
  }
  &:active {
    background-color: #00c70033;
    transform: translateY(2px);
    box-shadow: none;
  }
`;

const CellTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #4f4f4f;
`;

const CellSubtitle = styled.div`
  font-size: 11px;
  font-weight: 500;
  color: #bababa;
  margin-top: 4px;
`;

const CallContainer = styled.div`
  margin-left: 16px;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Time = styled.div`
  color: #bababa;
  font-size: 12px;
  font-weight: 500;
  margin: 0 6px;
`;

const AMPM = styled.div`
  color: #bababa;
  font-size: 10px;
  font-weight: 600;
  border: 1px solid lightgray;
  border-right: none;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  padding: 2px 4px 2px 4px;
`;

export {
  CallIconContainer,
  CallAccessory,
  CallCellContainer,
  CellTitle,
  CellSubtitle,
  CallContainer,
  Time,
  AMPM,
};
