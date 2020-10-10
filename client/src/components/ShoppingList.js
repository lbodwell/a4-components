import React, {Component} from "react";
import {Container, Row, Col, Button} from "react-bootstrap";

import ShoppingListForm from "./ShoppingListForm";
import ShoppingListTable from "./ShoppingListTable";
 
class ShoppingList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: []
		}

		this.updateData = this.updateData.bind(this);
	}
	
	componentDidMount() {
		this.updateData();
	}

	async updateData() {
		const res = await fetch("/api/items", {method: "GET"});
		const data = await res.json();
		this.setState({items: data});
	}

	handleLogout() {
		window.location.href = "http://localhost:5000/logout";
	}

	render() {
		return (
			<div>
				<h1 className="title">Shopping List</h1>
				<Container>
					<Row className="justify-content-center">
						<Col className="col-md-2">
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
			</div>
		);
	}
}

export default ShoppingList;