import styled from "styled-components";
import { Grid } from "@mui/material";

const RewardList = ({ children, ...props }) => {
  return (
    <Grid {...props}>
      <StyledGrid container>
        <Grid item>{children}</Grid>
        <Grid item>{children}</Grid>
        <Grid item>{children}</Grid>
        <Grid item>{children}</Grid>
        <Grid item>{children}</Grid>
        <Grid item>{children}</Grid>
        <Grid item>{children}</Grid>
        <Grid item>{children}</Grid>
        <Grid item>{children}</Grid>
        <Grid item>{children}</Grid>
        <Grid item>{children}</Grid>
        <Grid item>{children}</Grid>
      </StyledGrid>
    </Grid>
  );
};

const StyledGrid = styled(Grid)`
  justify-content: center;

  @media print, screen and (min-width: 1440px) {
    justify-content: flex-end;
  }

  > * + * {
    margin-top: 8px;
  }
`;

export default RewardList;
