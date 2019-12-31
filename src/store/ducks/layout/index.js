import { createAction, createReducer } from '@reduxjs/toolkit';
const INITIAL_STATE = {
	showMessage: false
};

export const showMessage = createAction('SHOW_MESSAGE');
export const hideMessage = createAction('HIDE_MESSAGE');

export default createReducer(INITIAL_STATE, {
	[showMessage.type]: (state) => ({ ...state, showMessage: true }),
	[hideMessage.type]: (state) => ({ ...state, showMessage: false })
});
