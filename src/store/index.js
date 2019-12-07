import { createStore, combineReducers } from 'redux';

import carsReducer from './cars';
import layoutReducer from './layout';

const rootReducer = combineReducers({
	cars: carsReducer,
	layout: layoutReducer
});

export default createStore(rootReducer);
