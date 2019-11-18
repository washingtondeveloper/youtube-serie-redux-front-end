import React from 'react';

import './styles.css';

export default function Car({ car }) {
	return (
		<div className="col-sm-3 mt-3 mb-3">
			<div className="card">
				<img src={car.url} className="card-img-top" alt={car.name} />
				<div className="card-body">
					<h5 className="card-title">{car.name}</h5>
					<button className="btn btn-primary">
						<i className="fa fa-cart-plus fa-2x" aria-hidden="true" />
					</button>
				</div>
			</div>
		</div>
	);
}
