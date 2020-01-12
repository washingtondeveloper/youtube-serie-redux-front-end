import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Car from '../../components/Car';

import { getAllCars } from '../../store/fetchActions';
import { addItem } from '../../store/ducks/cart';
import { addMessage } from '../../store/ducks/layout';

export default function List() {
	const cars = useSelector((state) => state.cars);
	const dispatch = useDispatch();

	useEffect(
		() => {
			dispatch(getAllCars());
		},
		[ dispatch ]
	);

	function addItemCart(car) {
		dispatch(addItem(car));

		dispatch(addMessage(`${car.name} adicionado com sucesso!!!`));
	}

	return (
		<div className="container-fluid">
			<div className="row">
				{cars.map((car, index) => <Car key={index} car={car} addItemCart={addItemCart} />)}
			</div>
		</div>
	);
}
