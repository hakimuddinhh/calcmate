// member reducer

const MEMBERS_DATA = {
  memberList: [
    // { key: 'Ironman', contribution: { total: 4000, paid: 3000, due: 1000 } },
    // { key: 'Batman', contribution: { total: 4000, paid: 3000, due: 1000 } },
    // { key: 'Spiderman', contribution: { total: 4000, paid: 3000, due: 1000 } },
    // { key: 'Antman', contribution: { total: 4000, paid: 3000, due: 1000 } },
    // { key: 'Shaktiman', contribution: { total: 4000, paid: 3000, due: 1000 } },
  ]
};

export default function MembersReducer(state = MEMBERS_DATA, action) {
  const { memberList } = state;
  let newState = [];
  switch (action.type) {
    case "addMember":
      const totalAmt =
        action.payload.components.totalAmount / (state.memberList.length + 1);
      const paidAmt = action.payload.memberDetails.amountPaid;
      const dueAmt = Math.round(totalAmt - paidAmt);

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
}
