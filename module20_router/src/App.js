import { Route } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import Login from './pages/Login';
import Welcome from './pages/Welcome';

function App() {
	return (
		<>
			<MainHeader />
			<main>
				<Route path='/welcome'>
					<Welcome />
				</Route>
				<Route path='/login/:username'>
					<Login />
				</Route>
			</main>
		</>
	);
}

export default App;
