const filterReducer = (state = { filter: "ALL" }, action) => {
  console.log("f", state);

  if (state.filter !== action.type) {
    return { filter: action.type };
  }

  return state;
};

export default filterReducer;
