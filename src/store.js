// init redux store
import { createStore, applyMiddleware} from 'redux';
// import thunkMiddleware from 'redux-thunk';

import reducer from './reducers';


// const store = createStore(reducer, applyMiddleware(
// 	thunkMiddleware));

const store = createStore(reducer);

export default store;