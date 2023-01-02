import styled from "styled-components";
import { Grid } from "@mui/material";
import AnswerButton from "../atoms/AnswerButton";
import { useSelector } from "react-redux";

//...props - mui def props
const AnswersBlock = ({ answerClick, types }) => {
  const state = useSelector((state) => state);

  const letters = ["A", "B", "C", "D"];
  return (
    <StyledGrid container rowSpacing={5}>
      {state.questions[state.index]?.answers.map((el, key) => {
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
