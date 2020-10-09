import React, {Component} from "react";
import {Container, Row, Col, Button} from "react-bootstrap";

import ShoppingListForm from "./ShoppingListForm";
import ShoppingListTable from "./ShoppingListTable";

class ShoppingList extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	
	render() {
		return (
			<div>
				<h1 className="title">Shopping List</h1>
				<Container>
					<Row className="justify-content-center">
						<Col className="col-md-2">
							<h3 className="header">Add item</h3>
							<ShoppingListForm/>
						</Col>
						<Col md="auto">
							<ShoppingListTable/>
						</Col>
					</Row>
					<Row className="justify-content-center">
						<Button variant="dark" id="logout-button">Log Out</Button>
					</Row>
				</Container>
			</div>
		);
	}
}

export default ShoppingList;