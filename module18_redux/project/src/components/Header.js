import classes from './Header.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/index.js';
import { useEffect, useState } from 'react';

const Header = () => {
	const dispatch = useDispatch();

	const loggedIn = useSelector((state) => state.auth.loggedIn);

	const [buttonText, setButtonText] = useState('Login');

	useEffect(() => {
		if (loggedIn) {
			setButtonText('Logout');
		} else {
			setButtonText('Login');
		}
	}, [loggedIn]);

	const loginHandler = () => {
		if (!loggedIn) {
			dispatch(authActions.showForm());
		} else {
			dispatch(authActions.logout());
		}
	};

	return (
		<header className={classes.header}>
			<h1>Redux Auth</h1>
			<nav>
				<ul>
					{loggedIn && (
						<>
							<li>
								<a href='/'>My Products</a>
							</li>
							<li>
								<a href='/'>My Sales</a>
							</li>
						</>
					)}
					<li>
						<button onClick={loginHandler}>{buttonText}</button>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
