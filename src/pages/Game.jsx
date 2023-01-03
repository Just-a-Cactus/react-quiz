import { Container, Grid } from "@mui/material";
import RewardList from "../components/UI/molecules/RewardList";
import styled from "styled-components";
import QuestionAndAnswersBlock from "../components/UI/organism/QuestionAndAnswersBlock";
import { useEffect, useState } from "react";
import Burger from "../components/UI/organism/Burger/Burger";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ROUTES from "../routes";
import { setQuestionIndex } from "../redux/actions/actions";
import { loadMoneyThunk, loadQuestionsThunk } from "../redux/reducers/reducer";

const Game = () => {
  const [types, setTypes] = useState([
    "inactive",
    "inactive",
    "inactive",
    "inactive",
  ]);

  const questionIndex = useSelector((state) => state.index);
  const questions = useSelector((state) => state.questions);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMoneyThunk());
    dispatch(loadQuestionsThunk());
  }, []);

  useEffect(() => {
    questionIndex === questions?.length && navigate(ROUTES.RESULTS);
  }, [questionIndex]);

  const navigate = useNavigate();

  const colorizeCorrectAnswer = () => {
    const newType = types.map((el, key) =>
      questions[questionIndex].correctAnswer ===
      questions[questionIndex].answers[key]
        ? "correct"
        : "wrong"
    );
    setTypes(newType);
  };

  const goToNextQuestion = (e) => {
    setTypes(["inactive", "inactive", "inactive", "inactive"]);
    if (e.target.id === questions[questionIndex].correctAnswer) {
      dispatch(setQuestionIndex(questionIndex + 1));
    } else {
      navigate(ROUTES.RESULTS);
    }
  };

  const answerClick = (e) => {
    const modifiedTypes = questions[questionIndex].answers.map((answer) =>
      answer === e.target.id ? "selected" : "test"
    );
    setTypes(modifiedTypes);
    setTimeout(colorizeCorrectAnswer, 500);
    setTimeout(() => goToNextQuestion(e), 1500);
  };

  if (loading)
    return (
      <StyledLoading>
        <p>Loading...</p>
      </StyledLoading>
    );

  if (error)
    return (
      <StyledLoading>
        <p>Something goes wrong...</p>
      </StyledLoading>
    );

  return (
    <>
      <Burger pageWrapId="page-wrap" outerContainerId="outer-container" />
      <StyledContainer fixed maxWidth="xl" disableGutters>
        <StyledGame container>
          <StyledLeftGrid item xs={12} xl={8}>
            {questions && (
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
