import api from '../../services/api';
import { loadingSuccess, addCar } from '../cars';
import { showMessage, hideMessage } from '../layout';

export const fetchCars = () => {
	return (dispatch) => {
		api
			.get('/cars')
			.then((res) => {
				dispatch(loadingSuccess(res.data));
			})
			.catch(console.log);
	};
};

export const fetchAddCar = (car) => {
	return (dispatch) => {
		api
			.post('/cars', car)
			.then((res) => {
				dispatch(addCar(res.data));
				dispatch(showMessage());

				setTimeout(() => {
					dispatch(hideMessage());
				}, 2500);
			})
			.catch(console.log);
	};
};
