const INITIAL_STATE = {
  current: {
    name: "",
    month: "January",
    setupProgress: 0
  }

};


// main reducer
export default function main(state = INITIAL_STATE, action) {
  const { current } = state;
  const newState = { current };
  switch (action.type) {
    case "changeFlatName":
      newState.current.name = action.payload;
      return newState;

    case "setSetupProgress":
    newState.current.setupProgress = action.payload;
    return newState;

    default:
      return state;
  }
};
