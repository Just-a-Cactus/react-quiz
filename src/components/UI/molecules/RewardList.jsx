import styled from "styled-components";
import { Grid } from "@mui/material";
import LabelButton from "../atoms/LabelButton";
import { useSelector } from "react-redux";
import { buildScoreTitle } from "../../../functions/helpers";

const RewardList = ({ ...props }) => {
  const state = useSelector((state) => state);

  return (
    <StyledGrid container {...props}>
      {state.money
        ?.map((el, key) => {
          let type;
          if (key === state.index) type = "active";
          else if (key > state.index) type = null;
          else type = "disabled";

          return (
            <Grid item key={key}>
              <LabelButton title={buildScoreTitle(el)} type={type} />
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
