import React, {Component} from "react";
import {Container, Row, Col, Button} from "react-bootstrap";

import ShoppingListForm from "./ShoppingListForm";
import ShoppingListTable from "./ShoppingListTable";
import Login from "./Login";
 
class ShoppingList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [{}, {}, {}],
			isAuthenticated: false
		}

		this.updateData = this.updateData.bind(this);
	}

	async updateData() {
		const res = await fetch("/api/items", {method: "GET"});
		const data = await res.json();
		this.setState({items: data});
	}

	async componentDidMount() {
		const res = await fetch("/auth/github/is-authenticated", {method: "GET"});
		const data = await res.json();
		this.setState({isAuthenticated: data.isAuthenticated}, () => this.updateData());
	}

	handleLogout() {
		window.location.href = "/logout";
	}

	render() {
		return (
			<div>
				{true
					? <Container>
						<h1 className="title">Shopping List</h1>
						<Row className="justify-content-center">
							<Col md={3} className="col-md-2">
								<h3 className="header">Add item</h3>
								<ShoppingListForm updateData={this.updateData}/>
							</Col>
							<Col md="auto">
								<ShoppingListTable items={this.state.items}/>
							</Col>
						</Row>
						<Row className="justify-content-center">
							<Button variant="dark" id="logout-button" onClick={this.handleLogout}>Log Out</Button>
						</Row>
					</Container>
					: <Login/>
				}
			</div>
		);
	}
}

export default ShoppingList;