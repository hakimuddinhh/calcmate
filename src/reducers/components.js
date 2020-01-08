const componentsArr = ["Rent","Maintainence","Electricity","Food","Gas","Maid","Others"];

const createComponentSchema = (name) => {
  return {
        key: name,
        budget: { total: null, used: {}, available: null },
        isAdded: false
  }
}

const componentsObj = componentsArr.map((component) => { return createComponentSchema(component) })


const contributionComponents0 = {
  totalAmount: null,
  current: [
    ...componentsObj
  ]
};

export default function components(state = contributionComponents0, action) {
  const newState = {...state};
  switch (action.type) {
    case "addContributionComponent":
      const data = createComponentSchema(action.payload);
      // data.budget.total = Number(action.payload);
      // data.budget.available = Number(action.payload);
      newState.current.push(data);
      // newState["totalAmount"] = Number(state.totalAmount);
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
      debugger;
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
}
