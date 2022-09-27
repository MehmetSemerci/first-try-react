import classes from './Auth.module.css';
import { useSelector, useDispatch } from 'react-redux';

import { authActions } from '../store/index.js';

const Auth = () => {
	const dispatch = useDispatch();
	const loggedIn = useSelector((state) => state.auth.loggedIn);
	const formVisible = useSelector((state) => state.auth.formVisible);

	const loginHandler = (event) => {
		if (!loggedIn) {
			dispatch(
				authActions.login({
					username: event.target.email.value,
					password: event.target.password.value,
				})
			);
			dispatch(authActions.hideForm());
		}
	};

	return (
		<>
			{formVisible && (
				<main className={classes.auth}>
					<section>
						<form onSubmit={loginHandler}>
							<div className={classes.control}>
								<label htmlFor='email'>Email</label>
								<input type='email' id='email' />
							</div>
							<div className={classes.control}>
								<label htmlFor='password'>Password</label>
								<input type='password' id='password' />
							</div>
							<button>Login</button>
						</form>
					</section>
				</main>
			)}
		</>
	);
};

export default Auth;
