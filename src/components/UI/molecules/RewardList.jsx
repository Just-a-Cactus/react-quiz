import styled from "styled-components";
import { Grid } from "@mui/material";
import LabelButton from "../atoms/LabelButton";
import { useSelector } from "react-redux";

const RewardList = () => {
  const money = useSelector((state) => state.money);
  const questionIndex = useSelector((state) => state.index);

  return (
    <StyledGrid container>
      {money
        ?.map((el, key) => {
          let type;
          if (key === questionIndex) type = "active";
          else if (key > questionIndex) type = null;
          else type = "disabled";

          return (
            <Grid item key={key}>
              <LabelButton title={el} type={type} />
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
