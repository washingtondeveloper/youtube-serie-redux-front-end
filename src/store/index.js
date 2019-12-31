import { configureStore } from '@reduxjs/toolkit';

import carsReducer from './ducks/cars';
import layoutReducer from './ducks/layout';

export default configureStore({
	reducer: {
		cars: carsReducer,
		layout: layoutReducer
	}
});
