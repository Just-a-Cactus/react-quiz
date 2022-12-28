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

function App() {
  const [questions, setQuestions] = useState(null);
  const [money, setMoney] = useState(null);
  const [index, setIndex] = useState(0);
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <CustomBackground active={location.pathname} maxWidth="xl" disableGutters>
        <Routes>
          <Route path="/" element={<Start setIndex={setIndex} />} />
          <Route
            path="/game"
            element={
              <Game
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
            path="/results"
            element={
              <EndGame
                index={index}
                money={money}
                setIndex={setIndex}
                buildScoreTitle={buildScoreTitle}
              />
            }
          />
          <Route path="*" element={<Start />} />
        </Routes>
      </CustomBackground>
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
