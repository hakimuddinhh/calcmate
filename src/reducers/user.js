const INITIAL_STATE = {
  current: null
};


// main reducer
export default function user(state = INITIAL_STATE, action) {
  const { current } = state;
  const newState = { current };
  switch (action.type) {
    case "setSession":
      newState.current = action.payload;
      return newState;

    case "deleteSession":
      newState.current = null;
      return newState;

    default:
      return state;
  }
};
