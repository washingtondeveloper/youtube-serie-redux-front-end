import React from 'react';

export default function ItemCart({ item, removeItemCart }) {
	return (
		<div className="col-sm-3 mt-3">
			<div className="card text-white bg-primary mb-3">
				<div className="card-header">{item.name}</div>
				<div className="card-body" style={{ padding: 0 }}>
					<img src={item.url} alt={item.name} style={{ width: '100%' }} />
				</div>
				<button
					onClick={() => removeItemCart(item._id)}
					className="btn btn-danger"
					style={{ width: 50, position: 'absolute', bottom: 15, right: 15 }}
				>
					<i className="fa fa-trash fa-2x" />
				</button>
			</div>
		</div>
	);
}
