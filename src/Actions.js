export const changeFlatName = flatName => ({
  type: "changeFlatName",
  payload: flatName
});

export const addMember = (memberDetails, components) => ({
  type: "addMember",
  payload: { memberDetails, components }
});

export const addContributionComponent = tagName => ({
  type: "addContributionComponent",
  payload: tagName
});

export const changeComponentStatus = tagName => ({
  type: "changeComponentStatus",
  payload: tagName
});

export const setComponentValue = (key, value) => ({
  type: "setComponentValue",
  payload: { key, value }
});

export const addExpense = (key, value, component) => ({
  type: "addExpense",
  payload: { key, value, component }
});

export const updateTotalRent = () => ({
  type: "updateTotalRent",
  payload: []
});

export const removeMember = name => ({
  type: "removeMember",
  payload: name
});

export const updateMemberDetails = (components) => ({
  type: "updateMemberDetails",
  payload: { components }
});

