export const stepReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENTSTEP":
      console.log("step: ", state);
      return state + 1;
    default:
      return state;
  }
};
