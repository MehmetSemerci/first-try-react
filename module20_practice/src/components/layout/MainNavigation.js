import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>Great Quotes</div>
			<nav className={classes.nav}>
				<ul>
					<li>
						<NavLink to='/view' activeClassName={classes.active}>
							View Quotes
						</NavLink>
					</li>
					<li>
						<NavLink to='add' activeClassName={classes.active}>
							Add Quote
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
