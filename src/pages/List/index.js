import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Car from '../../components/Car';

import { getAllCars } from '../../store/fetchActions';

export default function List() {
	const cars = useSelector((state) => state.cars);
	const dispatch = useDispatch();

	useEffect(
		() => {
			dispatch(getAllCars());
		},
		[ dispatch ]
	);

	return (
		<div className="container-fluid">
			<div className="row">{cars.map((car, index) => <Car key={index} car={car} />)}</div>
		</div>
	);
}
