import { combineReducers } from "redux";
import store from "redux";
import components from "./components";
import common from "./common";
import members from "./members";
import user from "./user";


// input reducer

// const inputsData = {};

// const InputsReducer = (state = inputsData, action) => {
//   let newState = state;
//   switch (action.type) {
//     case "onChangeInput":
//       debugger;
//       newState[action.payload.name] = action.payload.value;
//       return newState;


//     default:
//       return state;
//   }
// };


export default combineReducers({
	components: components,
	common: common,
	members: members,
	user: user,
});
