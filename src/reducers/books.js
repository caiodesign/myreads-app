const initialState = {
  books: [],
  myBooks: [],
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case 'UPDATE_MY_BOOKS':
      return { ...state, myBooks: action.books };
    default:
      return newState;
  }
};

export default reducer;
