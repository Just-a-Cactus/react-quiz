import "./App.css";

import { ThemeProvider } from "@mui/material";
import Button from "../UI/atoms/Button";
import theme from "../UI/theme/theme";
import AnswerButton from "../UI/atoms/AnswerButton";
import LabelButton from "../UI/atoms/LabelButton";
import AnswersBlock from "../UI/molecules/AnswersBlock";
import Start from "../../pages/Start";
import Game from "../../pages/Game";
import EndGame from "../../pages/EndGame";
import Burger from "../UI/organism/Burger";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Burger pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      {/*it is a pages*/}
      <Start />
      {/*<Game />*/}
      {/*<EndGame />*/}

      {/*it is for testing of components*/}
      {/*<div className="App">*/}
      {/*  <header className="App-header">*/}
      {/*<Button variant="contained">Try again</Button>*/}
      {/*    <AnswerButton disableRipple state={"correct"} title={"correct"} />*/}
      {/*    <AnswerButton disableRipple state={"wrong"} title={"wrong"} />*/}
      {/*    <AnswerButton disableRipple state={"selected"} title={"selected"} />*/}
      {/*    <AnswerButton disableRipple title={"inactive"} />*/}
      {/*    <LabelButton disableRipple title={"$1,000,000"} />*/}
      {/*    <LabelButton disableRipple state={"active"} title={"$100,000"} />*/}
      {/*    <LabelButton disableRipple state={"disabled"} title={"$10,000"} />*/}
      {/*    <AnswersBlock>*/}
      {/*      <AnswerButton disableRipple state={"wrong"} title={"inactive"} />*/}
      {/*    </AnswersBlock>*/}
      {/*  </header>*/}
      {/*</div>*/}
    </ThemeProvider>
  );
}

export default App;
