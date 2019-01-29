export const types = {
  UPDATE_MY_BOOKS: 'UPDATE_MY_BOOKS',
  UPDATE_BOOKS: 'UPDATE_BOOKS',
  SET_BOOKS_ERROR: 'SET_BOOKS_ERROR',
  SET_BOOKS_LOADING: 'SET_BOOKS_LOADING',
}

export const actions = {
  updateMyBooks: myBooks => ({ type: types.UPDATE_MY_BOOKS, myBooks }),
  updateBooks: books => ({ type: types.UPDATE_BOOKS, books }),
  setBooksError: error => ({ type: types.SET_BOOKS_ERROR, error }),
  setBooksLoading: loading => ({ type: types.SET_BOOKS_LOADING, loading }),
}

export default actions
