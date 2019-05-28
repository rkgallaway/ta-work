export const createCategory = (title) => {
  return {
    type: 'CATEGORY_CREATE',
  payload: {
      id: Math.random(),
        title,
        createdOn: new Date
  }
  }
};

export const updateCategory = (section) => {
  return {
    type: 'CATEGORY_UPDATE',
  payload: section,
}
};

export const destroyCategory = (section) => {
  return {
    type: 'CATEGORY_DESTROY',
  payload: section,
}
};
