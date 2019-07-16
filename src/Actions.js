export const changeFlatName = flatName => (
  {
    type: 'changeFlatName',
    payload: flatName,
  }
);

export const addMember = (memberDetails) => (
  {
    type: 'addMember',
    payload: { memberDetails },
  }
);

export const addContributionComponent = (tagName) => (
  {
      type: 'addContributionComponent',
      payload: tagName,
    }
);

export const changeComponentStatus = (tagName) => (
  {
    type: 'changeComponentStatus',
    payload: tagName,
  }
);

export const setComponentValue = (key, value) => (
  {
    type: 'setComponentValue',
    payload: { key, value },
  }
);

export const updateTotalRent = () => (
  {
    type: 'updateTotalRent',
    payload: [],
  }
);

export const removeMember = (name) => (
  {
    type: 'removeMember',
    payload: name,
  }
);
