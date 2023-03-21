import styled from "styled-components";
import { StyledIconBase } from "@styled-icons/styled-icon";

const BottomNavContainer = styled.div`
  border-top: 1px solid lightgrey;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  background-color: white;
`;

const ButtonContainer = styled.div`
  position: relative;
  &::after {
    content: "";
    width: 50%;
    ${(props) => props.isActive && props.greenHighlight}
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    background-color: rgb(42, 196, 32);
    position: absolute;
    bottom: 1px;
    left: calc(50% / 2);
    transition: all 0.1s ease;
  }
  svg {
    ${(props) =>
      props.isActive
        ? "fill: #333333;"
        : "fill: rgba(51, 51, 51, 0.3); color: rgba(51, 51, 51, 0.3);"}
  }
`;

const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    padding: 14px 10px;
    cursor: pointer;
    width: 22px;
    min-width: 16px;
    transition: box-shadow 0.2s ease, transform 0.07s ease,
      background-color 0.07s ease;
  }
`;

const Badge = styled.div`
  position: absolute;
  top: 6px;
  left: 20px;
  background-color: red;
  color: white;
  padding: 3px 6px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  ${(props) => (props.isActive ? "opacity: 1" : "opacity: 0.3")}
`;

const ButtonColumn = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const ButtonsLeft = styled(ButtonColumn)`
  margin-right: 48px;
  padding-left: 8px;
`;

const ButtonsRight = styled(ButtonColumn)`
  margin-left: 48px;
  padding-right: 8px;
`;

export {
  BottomNavContainer,
  ButtonContainer,
  IconStyleWrapper,
  Badge,
  ButtonsLeft,
  ButtonsRight,
};
