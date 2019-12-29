import { createAction, createReducer } from '@reduxjs/toolkit';
const INITIAL_STATE = [];

export const addCar = createAction('ADD_CAR');
export const loadingSuccess = createAction('LOADING_SUCCESS');

export default createReducer(INITIAL_STATE, {
	[addCar.type]: (state, action) => [ ...state, action.payload ],
	[loadingSuccess.type]: (_, action) => [ ...action.payload ]
});
