export const resultReducer = (state = 0, action) => {
  switch (action.type) {
    case "SETRESULT":
      return state + 1;
    default:
      return state;
  }
};