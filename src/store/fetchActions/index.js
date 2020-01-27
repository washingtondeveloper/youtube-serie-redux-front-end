import api from '../../services/api';
import { addCars, addCar } from '../ducks/cars';
import { login } from '../ducks/auth';
import { addMessage } from '../ducks/layout';

export const getAllCars = () => {
	return (dispatch) => {
		api
			.get('/cars')
			.then((res) => {
				dispatch(addCars(res.data));
			})
			.catch(console.log);
	};
};

export const addCarFetch = (car) => {
	return (dispatch) => {
		api.post('/cars', car).then((res) => dispatch(addCar(res.data))).catch(console.log);
	};
};

export const authLogin = (user) => {
	return (dispatch) => {
		api
			.post('/login', user)
			.then((res) => {
				localStorage.setItem('token', res.data.token);
				dispatch(login());

				window.location.pathname = '/add';
			})
			.catch((error) => {
				const { message } = error.response.data;
				dispatch(addMessage(message));
			});
	};
};
