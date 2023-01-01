import "./App.css";

import { Container, ThemeProvider } from "@mui/material";
import theme from "../UI/theme/theme";
import Start from "../../pages/Start";
import Game from "../../pages/Game";
import EndGame from "../../pages/EndGame";
import { useState } from "react";
import styled from "styled-components";
import { Route, Routes, useLocation } from "react-router-dom";
import { buildScoreTitle } from "../../functions/helpers";
import ErrorBoundary from "../ErrorBoundary";
import ROUTES from "../../routes";

function App() {
  const [questions, setQuestions] = useState(null);
  const [money, setMoney] = useState(null);
  const [index, setIndex] = useState(0);
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <CustomBackground
          active={location.pathname}
          maxWidth="xl"
          disableGutters
        >
          <Routes>
            <Route
              path={ROUTES.START}
              element={<Start setIndex={setIndex} />}
            />
            <Route
              path={ROUTES.GAME}
              element={
                <Game
                  setLoading={setLoading}
                  loading={loading}
                  money={money}
                  setQuestions={setQuestions}
                  setMoney={setMoney}
                  questions={questions}
                  index={index}
                  setIndex={setIndex}
                  buildScoreTitle={buildScoreTitle}
                />
              }
            />
            <Route
              path={ROUTES.RESULTS}
              element={
                <EndGame
                  index={index}
                  money={money}
                  setIndex={setIndex}
                  buildScoreTitle={buildScoreTitle}
                />
              }
            />
            <Route path={ROUTES.NOT_FOUND} element={<Start />} />
          </Routes>
        </CustomBackground>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

const CustomBackground = styled(Container)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: linear-gradient(
    to bottom right,
    #fff 0%,
    #fff 50%,
    ${theme.palette.answerButtons.selectedBG} 50%,
    ${theme.palette.answerButtons.selectedBG} 100%
  );
  background: ${(props) => (props?.active === "/" ? null : "#F5F5F7")};
`;

export default App;
