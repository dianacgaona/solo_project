import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; //logger helps us debug the code through the console in Chrome
import thunk from 'redux-thunk'; //checking if its a function or an action after we dispatch
import rootReducer from '../reducers/rootReducer';

const store = createStore(rootReducer, {}, applyMiddleware(logger, thunk));
// console.log(store.getState(), "STORESTORESTORE");
export default store;
