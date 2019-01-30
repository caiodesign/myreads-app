import { addStg } from '../utils'

const initialState = {
  books: [],
  myBooks: [],
  error: false,
  loading: false,
}

const reducer = (state = initialState, action) => {
  const newState = { ...state }
  switch (action.type) {
    case 'UPDATE_MY_BOOKS':
      addStg(action.myBooks)
      return { ...state, myBooks: action.myBooks }
    case 'UPDATE_BOOKS':
      return { ...state, books: action.books }
    case 'SET_BOOKS_ERROR':
      return { ...state, error: action.error }
    case 'SET_BOOKS_LOADING':
      return { ...state, loading: action.loading }
    default:
      return newState
  }
}

export default reducer
