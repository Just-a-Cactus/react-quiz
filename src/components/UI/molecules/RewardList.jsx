import styled from "styled-components";
import { Grid } from "@mui/material";
import LabelButton from "../atoms/LabelButton";

const RewardList = ({ money, index, buildScoreTitle = null, ...props }) => {
  return (
    <StyledGrid container {...props}>
      {money
        ?.map((el, key) => {
          let type;
          if (key === index) type = "active";
          else if (key > index) type = null;
          else type = "disabled";

          return (
            <Grid item key={key}>
              <LabelButton
                title={buildScoreTitle && buildScoreTitle(el)}
                type={type}
              />
            </Grid>
          );
        })
        .reverse()}
    </StyledGrid>
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
