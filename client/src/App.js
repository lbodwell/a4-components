import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import ShoppingList from "./components/ShoppingList";
import Login from "./components/Login";

import "./App.css";

const App = () => {
	return (
		<Router>
			<Route name="Home" path="/" exact component={ShoppingList}></Route>
			<Route name="Login" path="/login" exact component={Login}></Route>
		</Router>
	);
}

export default App;
