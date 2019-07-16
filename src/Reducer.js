import { combineReducers } from "redux";

const INITIAL_STATE = {
  current: { month: "January" }
};

const mainReducer = (state = INITIAL_STATE, action) => {
  const { current } = state;
  const newState = { current };
  switch (action.type) {
    case "changeFlatName":
      debugger;
      newState.month = action.payload;
      return newState;

    default:
      return state;
  }
};

const contributionComponents0 = {
  totalAmount: null,
  current: [
    { key: "Rent", value: null, isAdded: false },
    { key: "Maintainence", value: null, isAdded: false },
    { key: "Electricity", value: null, isAdded: false },
    { key: "Food", value: null, isAdded: false },
    { key: "Gas", value: null, isAdded: false },
    { key: "Maid", value: null, isAdded: false },
    { key: "Others", value: null, isAdded: false }
  ]
};

const contributionComponents = (state = contributionComponents0, action) => {
  const { current } = state;
  const newState = { current };
  switch (action.type) {
    case "addContributionComponent":
      newState.current.push({
        key: action.payload,
        value: action.payload,
        isAdded: true
      });
      newState["totalAmount"] = state.totalAmount;
      return newState;

    case "changeComponentStatus":
      newState.current.forEach(item => {
        if (item.key === action.payload) {
          item.isAdded = !item.isAdded;
        }
      });
      newState["totalAmount"] = state.totalAmount;
      return newState;

    case "setComponentValue":
      newState.current.forEach(item => {
        if (item.key === action.payload.key) {
          item.value = action.payload.value;
        }
      });
      newState["totalAmount"] = state.totalAmount;
      return newState;

    case "updateTotalRent":
      let total = 0;
      newState.current.forEach(item => {
        if (item.value !== null) {
          total += item.value;
        }
      });
      newState["totalAmount"] = total;
      return newState;

    default:
      return state;
  }
};

const MEMBERS_DATA = {
  memberList: [
    // { key: 'Ironman', contribution: { total: 4000, paid: 3000, due: 1000 } },
    // { key: 'Batman', contribution: { total: 4000, paid: 3000, due: 1000 } },
    // { key: 'Spiderman', contribution: { total: 4000, paid: 3000, due: 1000 } },
    // { key: 'Antman', contribution: { total: 4000, paid: 3000, due: 1000 } },
    // { key: 'Shaktiman', contribution: { total: 4000, paid: 3000, due: 1000 } },
  ]
};

const MembersReducer = (state = MEMBERS_DATA, action) => {
  const { memberList } = state;
  let newState = [];
  switch (action.type) {
    case "addMember":
      memberList.push({
        key: action.payload.memberDetails.name,
        contribution: {
          total: 4000,
          paid: action.payload.memberDetails.amountPaid,
          due: 1000
        }
      });
      newState = { memberList };
      return newState;

    case "removeMember":
      memberList.filter((item, key) => {
        if (item.key !== action.payload) {
          newState.push(item);
        }
      });
      newState = { memberList: newState };
      return newState;

    default:
      return state;
  }
};

export default combineReducers({
  main: mainReducer,
  components: contributionComponents,
  members: MembersReducer
});
