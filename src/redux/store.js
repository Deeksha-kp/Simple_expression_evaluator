import { createStore } from 'redux';
import expressionReducer from './reducer';

const store = createStore(expressionReducer);

export default store;