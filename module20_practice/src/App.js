import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';

import AddQuote from './pages/AddQuote';
import NotFound from './pages/NotFound';
import ViewQuote from './pages/ViewQuote';
import ViewQuotes from './pages/ViewQuotes';

function App() {
	return (
		<Layout>
			<Switch>
				<Route path='/' exact>
					<Redirect to='/view' />
				</Route>
				<Route path='/add'>
					<AddQuote />
				</Route>
				<Route path='/view' exact>
					<ViewQuotes />
				</Route>
				<Route path='/view/:quoteId'>
					<ViewQuote />
				</Route>
				<Route path='*'>
					<NotFound />
				</Route>
			</Switch>
		</Layout>
	);
}

export default App;
