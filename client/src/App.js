import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import ShoppingList from "./components/ShoppingList";
import Login from "./components/Login";

import "./App.css";

const App = () => {
	return (
		<BrowserRouter>
			<Route name="Home" path="/" exact component={ShoppingList}></Route>
			<Route name="Login" path="/login" exact component={Login}></Route>
		</BrowserRouter>
	);
}

export default App;
