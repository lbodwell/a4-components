import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import ShoppingList from "./components/ShoppingList";
import Login from "./components/Login";

import "./App.css";

const App = () => {
	return (
		<ShoppingList/>
	);
}

export default App;
