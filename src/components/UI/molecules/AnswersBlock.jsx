import styled from "styled-components";
import { Grid } from "@mui/material";
import AnswerButton from "../atoms/AnswerButton";

//...props - mui def props
const AnswersBlock = ({ answerClick, answers, types }) => {
  const letters = ["A", "B", "C", "D"];
  return (
    <StyledGrid container rowSpacing={5}>
      {answers?.map((el, key) => {
        return (
          <Grid item key={key}>
            <AnswerButton
              letter={letters[key]}
              type={types[key]}
              title={el}
              id={el}
              onClick={answerClick}
            />
          </Grid>
        );
      })}
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
