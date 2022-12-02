import styled from "styled-components";
import { Grid } from "@mui/material";

const AnswersBlock = ({ children, ...props }) => {
  return (
    <StyledGrid {...props}>
      <Grid container rowSpacing={5}>
        <Grid item>{children}</Grid>
        <Grid item>{children}</Grid>
        <Grid item>{children}</Grid>
        <Grid item>{children}</Grid>
      </Grid>
    </StyledGrid>
  );
};

const StyledGrid = styled(Grid)`
  padding: 0;

  :first-child {
    justify-content: flex-start;
  }
`;

export default AnswersBlock;
