import { useSelector, useDispatch } from 'react-redux';
import classes from './CartButton.module.css';

import { cartActions } from '../../store/index.js';

const CartButton = (props) => {
	const dispatch = useDispatch();
	const cartShown = useSelector((state) => state.cart.isShown);
	const items = useSelector((state) => state.cart.items);

	const clickHandler = () => {
		console.log('toggle');
		dispatch(cartActions.toggle());
	};

	return (
		<button className={classes.button} onClick={clickHandler}>
			<span>My Cart</span>
			<span className={classes.badge}>{items.length}</span>
		</button>
	);
};

export default CartButton;
