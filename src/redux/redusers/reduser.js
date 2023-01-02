const defaultState = {
  questions: null,
  money: null,
  index: 0,
  onScreen: "start",
  loading: false,
};
export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_QUESTIONS":
      return { ...state, questions: action.payload };
    case "SET_MONEY":
      return { ...state, money: action.payload };
    case "SET_INDEX":
      return { ...state, index: action.payload };
    case "SET_ONSCREEN":
      return { ...state, onScreen: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};
