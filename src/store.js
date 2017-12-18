import {createStore, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './ducks/reducer.js';

// COMP 43K Used applyMiddleware to add promiseMiddleware to redux makes asynchronous calls wait till promise is completed
export default createStore(reducer, applyMiddleware(promiseMiddleware()))