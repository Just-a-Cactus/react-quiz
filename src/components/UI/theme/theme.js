import { createTheme } from "@mui/material";

const orange120 = "#E87928";
const orange100 = "#FF8B37";
const orange80 = "#FFAC70";
const orange5 = "#FFF3EB";
const green100 = "#47D867";
const green5 = "#E6FAEA";
const red100 = "#EC6259";
const red5 = "#FDEEED";
const black100 = "#1C1C21";
const black40 = "#D0D0D8";
const white100 = "#FFFFFF";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Inter",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      "sans-serif",
    ].join(","),
    fontSize: 20,
  },
  palette: {
    button: {
      inactive: orange100,
      hover: orange80,
      pressed: orange120,
      textColor: white100,
    },
    answerButtons: {
      textColor: black100,
      letterColor: orange100,
      inactiveBorder: black40,
      inactiveBG: "transparent",
      selectedBorder: orange100,
      selectedBG: orange5,
      correctBorder: green100,
      correctBG: green5,
      wrongBorder: red100,
      wrongBG: red5,
      hoverBorder: orange100,
      hoverBG: "transparent",
    },
    labelButtons: {
      background: "transparent",
      defaultTextColor: black100,
      active: orange100,
      inactive: black40,
    },
    burger: {
      bgColor: white100,
      buttons: black100,
    },
  },
  breakpoints: {
    values: {
      xs: 320,
      sm: 320,
      md: 320,
      lg: 320,
      xl: 1440,
    },
  },
});

export default theme;
