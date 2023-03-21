import styled from "styled-components";

const CallDetailContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  background-color: white;
  border: 1px solid #e9e9e8;
  border-radius: 16px;
  box-shadow: 1px 2px 8px #d5d5d5;
  padding: 16px;
  width: 100%;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  height: 32px;
  width: 32px;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
`;

const ModalTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #4f4f4f;
  margin-top: 8px;
  text-align: center;
`;

const CallDate = styled.div`
  font-weight: 500;
  font-size: 11px;
  color: #bababa;
  margin: 16px 0;
  text-align: center;
`;

const CallDetailCellContainer = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
`;

const CallDetailCellDots = styled.div`
  border-bottom: 1px dotted #e9e9e8;
  height: 1px;
  flex: 1;
  margin: 0 8px;
`;

const CallDetailCellLabel = styled.div`
  font-weight: 500;
  font-size: 13px;
  color: #4f4f4f;
  text-align: left;
`;

const CallDetailCellValue = styled.div`
  font-weight: 500;
  font-size: 13px;
  color: #4f4f4f;
  text-align: right;
`;

const CallType = styled.div`
  font-weight: 400;
  font-size: 13px;
  color: #4f4f4f;
  text-align: center;
  text-transform: uppercase;
  margin: 16px 0;
`;

export {
  CallDetailContainer,
  CloseButton,
  ModalTitle,
  CallDate,
  CallDetailCellContainer,
  CallDetailCellDots,
  CallDetailCellLabel,
  CallDetailCellValue,
  CallType,
};
