import { Container, Grid } from "@mui/material";
import RewardList from "../components/UI/molecules/RewardList";
import styled from "styled-components";
import QuestionAndAnswersBlock from "../components/UI/organism/QuestionAndAnswersBlock";
import { useEffect, useState } from "react";
import Burger from "../components/UI/organism/Burger/Burger";
import { useNavigate } from "react-router-dom";
import actions from "../redux/actions/actions";
import { useSelector } from "react-redux";
import ROUTES from "../routes";

const Game = () => {
  const [types, setTypes] = useState([
    "inactive",
    "inactive",
    "inactive",
    "inactive",
  ]);

  const state = useSelector((state) => state);

  async function loadQuestions() {
    actions.setLoading(true);
    await fetch("http://localhost:4000/questions")
      .then((response) => response.json())
      .then((resData) => {
        actions.setQuestions(resData);
        actions.setLoading(false);
      });
  }

  async function loadMoney() {
    actions.setLoading(true);
    await fetch("http://localhost:4000/money")
      .then((response) => response.json())
      .then((resData) => {
        actions.setMoney(resData);
        actions.setLoading(false);
      });
  }

  useEffect(() => {
    loadQuestions();
    loadMoney();
  }, []);

  const navigate = useNavigate();

  const colorizeCorrectAnswer = () => {
    const newType = types.map((el, key) =>
      state.questions[state.index].correctAnswer ===
      state.questions[state.index].answers[key]
        ? "correct"
        : "wrong"
    );
    setTypes(newType);
  };

  const goToNextQuestion = (e) => {
    setTypes(["inactive", "inactive", "inactive", "inactive"]);
    if (e.target.id === state.questions[state.index].correctAnswer) {
      actions.setIndex(state.index + 1);
      if (state.index === state.questions.length - 1) navigate(ROUTES.RESULTS);
    } else {
      navigate(ROUTES.RESULTS);
    }
  };

  const answerClick = (e) => {
    const modifiedTypes = state.questions[state.index].answers.map((answer) =>
      answer === e.target.id ? "selected" : "test"
    );
    setTypes(modifiedTypes);
    setTimeout(colorizeCorrectAnswer, 500);
    setTimeout(() => goToNextQuestion(e), 1500);
  };

  if (state.loading)
    return (
      <StyledLoading>
        <p>Loading...</p>
      </StyledLoading>
    );

  return (
    <>
      <Burger pageWrapId="page-wrap" outerContainerId="outer-container" />
      <StyledContainer fixed maxWidth="xl" disableGutters>
        <StyledGame container>
          <StyledLeftGrid item xs={12} xl={8}>
            {state.questions && (
              <QuestionAndAnswersBlock
                types={types}
                answerClick={answerClick}
              />
            )}
          </StyledLeftGrid>
          <StyledRightGrid item>
            <RewardList />
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

const StyledLoading = styled(StyledContainer)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
