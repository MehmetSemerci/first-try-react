import { useParams } from 'react-router-dom';

const Login = () => {
	const params = useParams();
	return (
		<>
			<h2>{params.username}</h2>
		</>
	);
};

export default Login;
