import { configureStore } from '@reduxjs/toolkit';

import carsReducer from './ducks/cars';
import layoutReducer from './ducks/layout';
import cartReducer from './ducks/cart';
import authReducer from './ducks/auth';

export default configureStore({
	reducer: {
		cars: carsReducer,
		layout: layoutReducer,
		cart: cartReducer,
		auth: authReducer
	}
});
