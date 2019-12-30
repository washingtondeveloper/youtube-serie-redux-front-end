import { configureStore } from '@reduxjs/toolkit';

import carsReducer from './cars';
import layoutReducer from './layout';

export default configureStore({
	reducer: {
		cars: carsReducer,
		layout: layoutReducer
	}
});
