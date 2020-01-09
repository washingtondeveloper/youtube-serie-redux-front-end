import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = [];

export const addItem = createAction('ADD_ITEM');
export const removeItem = createAction('REMOVE_ITEM');

export default createReducer(INITIAL_STATE, {
	[addItem.type]: (state, action) => [ ...state, action.payload ],
	[removeItem.type]: (state, action) => state.filter((item) => item._id !== action.payload)
});
