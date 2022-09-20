export const changeResult = () => {
  return {
    type: "SETRESULT",
  };
};

export const changeResultParam = (param) => {
  return {
    type: "SETRESULTPARAM",
    payload: param,
  };
};
