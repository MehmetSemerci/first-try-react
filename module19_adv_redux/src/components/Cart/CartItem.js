import { useSelector, useDispatch } from 'react-redux';
import classes from './CartItem.module.css';

import { cartActions } from '../../store/index.js';

const CartItem = (props) => {
	const dispatch = useDispatch();
	const { title, quantity, total, price } = props.item;

	const removeHandler = () => {
		dispatch(cartActions.removeItem({ title: title }));
	};

	const addHandler = () => {
		dispatch(cartActions.addItem({ title: title, price: price }));
	};

	return (
		<li className={classes.item}>
			<header>
				<h3>{title}</h3>
				<div className={classes.price}>
					${total.toFixed(2)}{' '}
					<span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
				</div>
			</header>
			<div className={classes.details}>
				<div className={classes.quantity}>
					x <span>{quantity}</span>
				</div>
				<div className={classes.actions}>
					<button onClick={removeHandler}>-</button>
					<button onClick={addHandler}>+</button>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
