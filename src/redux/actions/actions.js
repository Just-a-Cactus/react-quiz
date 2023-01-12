export const setQuestions = (payload) => ({ type: "SET_QUESTIONS", payload });
export const setMoney = (payload) => ({ type: "SET_MONEY", payload });
export const setQuestionIndex = (payload) => ({
  type: "SET_QUESTION_INDEX",
  payload,
});
export const setLoading = (payload) => ({ type: "SET_LOADING", payload });
export const setError = (payload) => ({ type: "SET_ERROR", payload });

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
