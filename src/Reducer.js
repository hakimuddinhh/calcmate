import { combineReducers } from "redux";
import store from "redux";

const INITIAL_STATE = {
  current: { month: "January" }
};

const mainReducer = (state = INITIAL_STATE, action) => {
  const { current } = state;
  const newState = { current };
  switch (action.type) {
    case "changeFlatName":
      newState.month = action.payload;
      return newState;

    default:
      return state;
  }
};

const contributionComponents0 = {
  totalAmount: null,
  current: [
    // { key: "Rent", value: null, isAdded: false },
    {
      key: "Rent",
      budget: { total: null, used: {}, available: null },
      isAdded: false
    },
    {
      key: "Maintainence",
      budget: { total: null, used: {}, actionvailable: null },
      isAdded: false
    },
    {
      key: "Electricity",
      budget: { total: null, used: {}, available: null },
      isAdded: false
    },
    {
      key: "Food",
      budget: { total: null, used: {}, available: null },
      isAdded: false
    },
    {
      key: "Gas",
      budget: { total: null, used: {}, available: null },
      isAdded: false
    },
    {
      key: "Maid",
      budget: { total: null, used: {}, available: null },
      isAdded: false
    },
    {
      key: "Others",
      budget: { total: null, used: {}, available: null },
      isAdded: false
    }
  ]
};

const contributionComponents = (state = contributionComponents0, action) => {
  const { current } = state;
  const newState = { current };
  switch (action.type) {
    case "addContributionComponent":
      const data = {
        key: action.payload,
        isAdded: true
      };
      data.budget.total = Number(action.payload);
      data.budget.available = Number(action.payload);
      newState.current.push(data);
      newState["totalAmount"] = Number(state.totalAmount);
      return newState;

    case "changeComponentStatus":
      newState.current.forEach(item => {
        if (item.key === action.payload) {
          item.isAdded = !item.isAdded;
        }
      });
      newState["totalAmount"] = Number(state.totalAmount);
      return newState;

    case "setComponentValue":
      newState.current.forEach(item => {
        if (item.key === action.payload.key) {
          item.budget.total = Number(action.payload.value);
          item.budget.available = Number(action.payload.value);
        }
      });
      newState["totalAmount"] = state.totalAmount;
      return newState;

    case "updateTotalRent":
      let total = 0;
      newState.current.forEach(item => {
        if (item.budget.total !== null) {
          total += Number(item.budget.total);
        }
      });
      newState["totalAmount"] = total;
      return newState;

    case "addExpense":
      newState.current.forEach(item => {
        if (item.key === action.payload.key.component) {
          // adding the expense's details
          if (action.payload.key.uid) {
            const data = action.payload.key;
            const uid = data.uid;

            // check if expense item's category is changed
            if (item.budget.used[uid]) {
              // if its the same category update the main data
              item.budget.available += Number(item.budget.used[uid].amount);
              item.budget.used[uid]["amount"] = Number(data.amount);
              item.budget.used[uid]["component"] = data.component;
              item.budget.used[uid]["key"] = data.key;
            } else {
              // if its different then remove the expense from previous set category
            }
          } else {
            item.budget.used[Math.random()] = action.payload.key;
          }
          // updating total value of the component
          if (item.budget.available) {
            item.budget.available -= Number(action.payload.key.amount);
          }
        }
      });
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
      const totalAmt =
        action.payload.components.totalAmount / (state.memberList.length + 1);
      const paidAmt = action.payload.memberDetails.amountPaid;
      const dueAmt = Math.round( totalAmt - paidAmt);

      memberList.push({
        key: action.payload.memberDetails.name,
        contribution: {
          total: totalAmt,
          paid: paidAmt,
          due: dueAmt
        }
      });
      newState = { memberList };
      return newState;

    case "updateMemberDetails":
      const totalAmount =
      action.payload.components.totalAmount / state.memberList.length;
      newState.memberList = (() => {
        return memberList.map(data => {
          data.contribution.total = Math.round(totalAmount);
          const dueAmt = totalAmount - data.contribution.paid;
          data.contribution.due = Math.round(dueAmt);
          return data;
        });
      })();
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

export default combineReducers(
  {
    main: mainReducer,
    components: contributionComponents,
    members: MembersReducer
  }
);
