import { hideMessage, showMessage } from './index';

describe('Layout Actions', () => {
	describe('Actions Types', () => {
		test('deve retornar a action type SHOW_MESSAGE', () => {
			expect(showMessage.type).toEqual('SHOW_MESSAGE');
		});

		test('deve retornar a action type HIDE_MESSAGE', () => {
			expect(hideMessage.type).toEqual('HIDE_MESSAGE');
		});
	});

	describe('Actions Creators', () => {
		test('deve retornar a action creator showMessage { type: SHOW_MESSAGE }', () => {
			expect(showMessage()).toEqual({ type: 'SHOW_MESSAGE' });
		});

		test('deve retornar a action creator hideMessage { type: HIDE_MESSAGE }', () => {
			expect(hideMessage()).toEqual({ type: 'HIDE_MESSAGE' });
		});
	});
});
