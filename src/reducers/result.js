export const resultReducer = (state = 0, action) => {
  switch (action.type) {
    case "SETRESULT":
      console.log("result: ", state);
      return state + 1;
    default:
      return state;
  }
};
