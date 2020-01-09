import { configureStore } from '@reduxjs/toolkit';

import carsReducer from './ducks/cars';
import layoutReducer from './ducks/layout';
import cartReducer from './ducks/cart';

export default configureStore({
	reducer: {
		cars: carsReducer,
		layout: layoutReducer,
		cart: cartReducer
	}
});
