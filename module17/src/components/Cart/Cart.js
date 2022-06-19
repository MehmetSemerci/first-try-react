import React, { useState } from 'react';
import { useContext } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';

const Cart = (props) => {
	const cartCtx = useContext(CartContext);

	const [showCheckout, setShowCheckout] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [didSubmit, setDidSubmit] = useState(false);

	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
	const hasItems = cartCtx.items.length > 0;

	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id);
	};

	const cartItemAddHandler = (item) => {
		cartCtx.addItem(item);
	};

	const cartItems = (
		<ul className={classes['cart-items']}>
			{cartCtx.items.map((item) => (
				<CartItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					onRemove={cartItemRemoveHandler.bind(null, item.id)}
					onAdd={cartItemAddHandler.bind(null, item)}
				/>
			))}
		</ul>
	);

	const orderHandler = () => {
		setShowCheckout(true);
	};

	const submitOrderHandler = async (userData) => {
		setIsSubmitting(true);
		await fetch(
			'https://dev-project-mse-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
			{
				method: 'POST',
				body: JSON.stringify({ user: userData, orderedItems: cartCtx.items }),
			}
		);
		setIsSubmitting(false);
	};

	return (
		<Modal onClose={props.onClose}>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			{showCheckout && (
				<Checkout
					onCancel={props.onClose}
					onConfirm={submitOrderHandler}
				></Checkout>
			)}
			{!showCheckout && (
				<div className={classes.actions}>
					<button className={classes['button--alt']} onClick={props.onClose}>
						Close
					</button>
					{hasItems && (
						<button className={classes.button} onClick={orderHandler}>
							Order
						</button>
					)}
				</div>
			)}
		</Modal>
	);
};

export default Cart;
