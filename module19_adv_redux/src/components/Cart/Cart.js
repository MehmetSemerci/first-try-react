import { useSelector, useDispatch } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
	const items = useSelector((state) => state.cart.items);
	return (
		<Card className={classes.cart}>
			<h2>Your Shopping Cart</h2>
			{items.length < 1 && <p3>Your shopping cart is empty!</p3>}
			<ul>
				{items.map((item) => {
					return (
						<CartItem
							key={item.title}
							item={{
								title: item.title,
								quantity: item.quantity,
								total: item.total,
								price: item.price,
							}}
						/>
					);
				})}
			</ul>
		</Card>
	);
};

export default Cart;
