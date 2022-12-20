import { Button } from "@mui/material";
import styled from "styled-components";
import theme from "../theme/theme";

const LabelButton = ({ title, type, ...props }) => (
  <StyledButton type={type} {...props}>
    <svg viewBox="0 0 376 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M69 20H0" stroke="currentStroke" />
      <path d="M376 20H307" stroke="currentStroke" />
      <path
        d="M81.4526 4.63788C83.6376 2.01596 86.8742 0.5 90.2872 0.5H285.713C289.126 0.5 292.362 2.01597 294.547 4.63788L307.349 20L294.547 35.3621C292.362 37.984 289.126 39.5 285.713 39.5H90.2872C86.8742 39.5 83.6376 37.984 81.4526 35.3621L68.6509 20L81.4526 4.63788Z"
        fill="currentFill"
        stroke="currentStroke"
      />
    </svg>
    <div className="innerText">
      <p>{title}</p>
    </div>
  </StyledButton>
);

const StyledButton = styled(Button)`
  width: 100%;
  pointer-events: none;
  padding: 0;

  svg {
    width: 100%;
    height: 32px;

    @media print, screen and (min-width: 1440px) {
      height: 40px;
    }
  }

  .innerText {
    position: absolute;

    color: ${(props) => {
      switch (props.type?.toLowerCase()) {
        case "active":
          return theme.palette.labelButtons.active;
        case "disabled":
          return theme.palette.labelButtons.inactive;
        default:
          return theme.palette.labelButtons.defaultTextColor;
      }
    }};
  }

  svg {
    fill: ${theme.palette.labelButtons.background}
  }

  stroke: ${(props) => {
    switch (props.type?.toLowerCase()) {
      case "active":
        return theme.palette.labelButtons.active;
      default:
        return theme.palette.labelButtons.inactive;
    }
  }};
}`;

export default LabelButton;
