export const types = {
  UPDATE_MY_BOOKS: 'UPDATE_MY_BOOKS',
};

export const actions = {
  updateBooks: books => ({ type: types.UPDATE_MY_BOOKS, books }),
};

export default actions;
