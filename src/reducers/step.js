export const stepReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENTSTEP":
      return state + 1;
    default:
      return state;
  }
};
