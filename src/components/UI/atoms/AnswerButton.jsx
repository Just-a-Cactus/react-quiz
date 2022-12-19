import { Button } from "@mui/material";
import styled from "styled-components";
import theme from "../theme/theme";

//...props - mui def props
const AnswerButton = ({ letter, title, type, ...props }) => (
  <StyledButton type={type} {...props} disableRipple>
    <svg viewBox="0 0 405 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M388 36L405 36" stroke="currentStroke" />
      <path d="M0 36L17 36" stroke="currentStroke" />
      <path
        d="M48.052 0.5H356.948C360.648 0.5 364.122 2.28016 366.283 5.28344L388.384 36L366.283 66.7166C364.122 69.7198 360.648 71.5 356.948 71.5H48.052C44.3521 71.5 40.8781 69.7198 38.7172 66.7166L16.616 36L38.7172 5.28344C40.8781 2.28016 44.3521 0.5 48.052 0.5Z"
        fill="currentFill"
        stroke="currentStroke"
      />
    </svg>
    <div className={"innerText"}>
      <p>{letter}.</p>
      <p>{title}</p>
    </div>
  </StyledButton>
);

const StyledButton = styled(Button)`
  background: none;
  text-transform: capitalize;
  padding: 0;

  * {
    pointer-events: none;
  }

  svg {
    width: 320px;
    height: 56px;

    @media print, screen and (min-width: 1440px) {
      width: 405px;
      height: 72px;
    }
  }

  &:hover {
    background: none;
  }

  &:hover svg {
    fill: ${theme.palette.answerButtons.hoverBG};
    stroke: ${theme.palette.answerButtons.hoverBorder};
  }

  .innerText {
    color: ${theme.palette.answerButtons.textColor};

    position: absolute;
    display: flex;

    & :first-child {
      color: ${theme.palette.answerButtons.letterColor};
      font-weight: 600;
      margin-right: 10px;
    }
  }

  svg {
    fill: ${(props) => {
      switch (props.type?.toLowerCase()) {
        case "selected":
          return theme.palette.answerButtons.selectedBG;
        case "correct":
          return theme.palette.answerButtons.correctBG;
        case "wrong":
          return theme.palette.answerButtons.wrongBG;
        default:
          return theme.palette.answerButtons.inactiveBG;
      }
    }};

    stroke: ${(props) => {
      switch (props.type?.toLowerCase()) {
        case "selected":
          return theme.palette.answerButtons.selectedBorder;
        case "correct":
          return theme.palette.answerButtons.correctBorder;
        case "wrong":
          return theme.palette.answerButtons.wrongBorder;
        default:
          return theme.palette.answerButtons.inactiveBorder;
      }
    }};
  }
`;

export default AnswerButton;
