import { Button } from "@mui/material";
import styled from "styled-components";
import theme from "../theme/theme";

const StyledButton = styled(Button)`
  text-transform: inherit;
  border-radius: 12px;

  background-color: ${theme.palette.button.inactive};

  &:hover {
    background-color: ${theme.palette.button.hover};
  }

  &:focus {
    background-color: ${theme.palette.button.pressed};
  }
`;

export default StyledButton;
