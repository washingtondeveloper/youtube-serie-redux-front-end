import api from '../../services/api';
import { addCars, addCar } from '../ducks/cars';

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
