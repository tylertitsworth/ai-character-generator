import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createWrapper } from "next-redux-wrapper";
import charReducer from './reducer';



const middleware = [thunk]
const makeStore = () => createStore(charReducer, compose(applyMiddleware(...middleware)))

export const wrapper = createWrapper(makeStore)

