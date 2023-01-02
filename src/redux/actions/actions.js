import { bindActionCreators } from "redux";
import store from "../store/store";

const setQuestions = (payload) => ({ type: "SET_QUESTIONS", payload });
const setMoney = (payload) => ({ type: "SET_MONEY", payload });
const setIndex = (payload) => ({ type: "SET_INDEX", payload });
const setOnscreen = (payload) => ({ type: "SET_ONSCREEN", payload });
const setLoading = (payload) => ({ type: "SET_LOADING", payload });

const actions = bindActionCreators(
  {
    setQuestions,
    setMoney,
    setIndex,
    setOnscreen,
    setLoading,
  },
  store.dispatch
);

export default actions;
