import { Container, Grid } from "@mui/material";
import RewardList from "../components/UI/molecules/RewardList";
import styled from "styled-components";
import QuestionAndAnswersBlock from "../components/UI/organism/QuestionAndAnswersBlock";

const Game = ({
  buildScoreTitle,
  questions,
  money,
  index,
  setIndex,
  setOnScreen,
}) => {
  const answerClick = (e) => {
    if (e.target.id === questions[index].correctAnswer) {
      setIndex(index + 1);
      if (index === questions.length - 1) setOnScreen("end");
    } else {
      setOnScreen("end");
    }
  };

  return (
    <StyledContainer fixed maxWidth={"xl"} disableGutters>
      <StyledGame container>
        <StyledLeftGrid item xs={12} xl={8}>
          {questions && (
            <QuestionAndAnswersBlock
              question={questions[index].question}
              answers={questions[index].answers}
              answerClick={answerClick}
            />
          )}
        </StyledLeftGrid>
        <StyledRightGrid item>
          {money && (
            <RewardList
              money={money}
              index={index}
              buildScoreTitle={buildScoreTitle}
            />
          )}
        </StyledRightGrid>
      </StyledGame>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  @media print, screen and (min-width: 1440px) {
    padding-left: 80px;
  }
`;

const StyledGame = styled(Grid)`
  height: 100vh;
`;

const StyledLeftGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 20vh;
  margin-bottom: 5vh;

  @media print, screen and (min-width: 1440px) {
    margin-top: 20vh;
    margin-bottom: 20vh;
  }
`;

const StyledRightGrid = styled(Grid)`
  margin-left: 77px;
  max-width: 376px;
  background: white;
  display: none;
  @media print, screen and (min-width: 1440px) {
    display: flex;
  }
  flex-direction: column;
  justify-content: center;
`;

export default Game;
