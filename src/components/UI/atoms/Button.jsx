import { Button } from "@mui/material";
import styled from "styled-components";
import theme from "../theme/theme";
import { Link } from "react-router-dom";

const CustomButton = ({ to, text, ...props }) => (
  <StyledButton {...props}>
    <StyledLink to={to}>{text}</StyledLink>
  </StyledButton>
);

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  height: 100%;
  width: 100%;
`;

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

export default CustomButton;
