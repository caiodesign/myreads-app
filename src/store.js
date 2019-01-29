import { createStore } from 'redux'
import Reducer from './reducers/books'

const store = createStore(Reducer, ['Use Redux'])

export default store
