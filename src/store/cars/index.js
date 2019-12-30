import { createAction, createReducer } from '@reduxjs/toolkit';
const INITIAL_STATE = [];

export const addCar = createAction('ADD_CAR');

export default createReducer(INITIAL_STATE, {
	[addCar.type]: (state, action) => [ ...state, action.payload ]
});
