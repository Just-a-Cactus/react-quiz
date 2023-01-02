import "./App.css";

import { Container, ThemeProvider } from "@mui/material";
import theme from "../UI/theme/theme";
import Start from "../../pages/Start";
import Game from "../../pages/Game";
import EndGame from "../../pages/EndGame";
import styled from "styled-components";
import { Route, Routes, useLocation } from "react-router-dom";
import { buildScoreTitle } from "../../functions/helpers";
import ErrorBoundary from "../ErrorBoundary";
import ROUTES from "../../routes";

function App() {
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <CustomBackground
          active={location.pathname}
          maxWidth="xl"
          disableGutters
        >
          <Routes>
            <Route path={ROUTES.START} element={<Start />} />
            <Route
              path={ROUTES.GAME}
              element={<Game buildScoreTitle={buildScoreTitle} />}
            />
            <Route path={ROUTES.RESULTS} element={<EndGame />} />
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
