import {
  setError,
  setLoading,
  setMoney,
  setQuestions,
} from "../actions/actions";

const defaultState = {
  questions: null,
  money: null,
  index: 0,
  onScreen: "start",
  loading: false,
  error: false,
};
export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_QUESTIONS":
      return { ...state, questions: action.payload };
    case "SET_MONEY":
      return { ...state, money: action.payload };
    case "SET_QUESTION_INDEX":
      return { ...state, index: action.payload };
    case "SET_ONSCREEN":
      return { ...state, onScreen: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_ERROR":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export const loadQuestionsThunk = () => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    await fetch("http://localhost:4000/questions")
      .then((response) => response.json())
      .then((resData) => {
        dispatch(setQuestions(resData));
      });
  } catch (e) {
    dispatch(setError(true));
  } finally {
    dispatch(setLoading(false));
  }
};

export const loadMoneyThunk = () => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    await fetch("http://localhost:4000/money")
      .then((response) => response.json())
      .then((resData) => {
        dispatch(setMoney(resData));
      });
  } catch (e) {
    dispatch(setError(true));
  } finally {
    dispatch(setLoading(false));
  }
};
