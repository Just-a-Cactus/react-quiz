import { Container, Grid } from "@mui/material";
import RewardList from "../components/UI/molecules/RewardList";
import styled from "styled-components";
import QuestionAndAnswersBlock from "../components/UI/organism/QuestionAndAnswersBlock";
import { useState } from "react";
import Burger from "../components/UI/organism/Burger/Burger";

const Game = ({
  buildScoreTitle,
  questions,
  money,
  index,
  setIndex,
  setOnScreen,
}) => {
  const [types, setTypes] = useState([
    "inactive",
    "inactive",
    "inactive",
    "inactive",
  ]);

  const colorizeCorrectAnswer = () => {
    const newType = types.map((el, key) =>
      questions[index].correctAnswer === questions[index].answers[key]
        ? "correct"
        : "wrong"
    );
    setTypes(newType);
  };

  const goToNextQuestion = (e) => {
    setTypes(["inactive", "inactive", "inactive", "inactive"]);
    if (e.target.id === questions[index].correctAnswer) {
      setIndex(index + 1);
      if (index === questions.length - 1) setOnScreen("end");
    } else {
      setOnScreen("end");
    }
  };

  const answerClick = (e) => {
    const modifiedTypes = questions[index].answers.map((answer) =>
      answer === e.target.id ? "selected" : "test"
    );
    setTypes(modifiedTypes);
    setTimeout(colorizeCorrectAnswer, 500);
    setTimeout(() => goToNextQuestion(e), 1500);
  };

  return (
    <>
      <Burger
        pageWrapId="page-wrap"
        outerContainerId="outer-container"
        money={money}
        index={index}
        buildScoreTitle={buildScoreTitle}
      />
      <StyledContainer fixed maxWidth="xl" disableGutters>
        <StyledGame container>
          <StyledLeftGrid item xs={12} xl={8}>
            {questions && (
              <QuestionAndAnswersBlock
                question={questions[index].question}
                answers={questions[index].answers}
                types={types}
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
    </>
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
