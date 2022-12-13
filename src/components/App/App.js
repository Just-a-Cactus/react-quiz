import "./App.css";

import { Container, ThemeProvider } from "@mui/material";
import theme from "../UI/theme/theme";
import Start from "../../pages/Start";
import Game from "../../pages/Game";
import EndGame from "../../pages/EndGame";
import Burger from "../UI/organism/Burger/Burger";
import { useEffect, useState } from "react";
import styled from "styled-components";

function App() {
  const [questions, setQuestions] = useState(null);
  const [money, setMoney] = useState(null);
  const [index, setIndex] = useState(0);
  const [onScreen, setOnScreen] = useState("start");

  async function loadQuestions() {
    await fetch("http://localhost:4000/questions")
      .then((response) => response.json())
      .then((resData) => setQuestions(resData));
  }

  async function loadMoney() {
    await fetch("http://localhost:4000/money")
      .then((response) => response.json())
      .then((resData) => setMoney(resData));
  }

  const buildScoreTitle = (el) => {
    const currency = "$";
    switch (el.length) {
      case 7:
        return `${
          currency + el.slice(0, 1) + "," + el.slice(1, 4) + "," + el.slice(-3)
        }`;
      case 6:
        return `${currency + el.slice(0, 3) + "," + el.slice(-3)}`;
      case 5:
        return `${currency + el.slice(0, 2) + "," + el.slice(-3)}`;
      case 4:
        return `${currency + el.slice(0, 1) + "," + el.slice(-3)}`;
      default:
        return `${currency + el}`;
    }
  };

  useEffect(() => {
    loadQuestions();
    loadMoney();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CustomBackground active={onScreen} maxWidth={"xl"} disableGutters>
        <Burger
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
          money={money}
          index={index}
          buildScoreTitle={buildScoreTitle}
        />
        {onScreen === "start" ? <Start setOnScreen={setOnScreen} /> : null}
        {onScreen === "game" ? (
          <Game
            money={money}
            questions={questions}
            index={index}
            setIndex={setIndex}
            setOnScreen={setOnScreen}
            buildScoreTitle={buildScoreTitle}
          />
        ) : null}
        {onScreen === "end" ? (
          <EndGame
            prise={money[index - 1]}
            setIndex={setIndex}
            setOnScreen={setOnScreen}
            buildScoreTitle={buildScoreTitle}
          />
        ) : null}
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
  background: ${(props) => (props?.active === "start" ? null : "#F5F5F7")};
`;

export default App;
