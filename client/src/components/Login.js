import React from "react";
import {Row, Button} from "react-bootstrap";

const handleLogin = () => {
	window.location.href = "http://localhost:5000/auth/github/login";
}

const Login = () => {
	return (
		<div>
			<h1 className="title">Shopping List</h1>
			<Row className="justify-content-center">
				<Button variant="dark" id="login-button" onClick={handleLogin}>
					<i className="fa fa-github" aria-hidden="true"></i> Log in with GitHub
				</Button>
			</Row>
		</div>
	);
}

export default Login;