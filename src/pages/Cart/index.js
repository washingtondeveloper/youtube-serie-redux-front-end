import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../../store/ducks/cart';

import ItemCart from '../../components/ItemCart';
import { addMessage } from '../../store/ducks/layout';

export default function Cart() {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	function removeItemCart(car) {
		dispatch(removeItem(car._id));

		dispatch(addMessage(`${car.name} removido com sucesso!!!`));
	}

	return (
		<div className="container-fluid">
			<div className="row">
				{cart.length === 0 ? (
					<p className="col-sm-12 mt-5 text-warning text-center">Sem produtos no Carrinho...</p>
				) : (
					<React.Fragment>
						{cart.map((item) => <ItemCart key={item._id} item={item} removeItemCart={removeItemCart} />)}
					</React.Fragment>
				)}
			</div>
		</div>
	);
}
