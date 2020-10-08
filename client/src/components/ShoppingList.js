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
			<Container xs>
				<Row className="justify-content-center">
					<Col md={2}>
						<h3 className="header">Add item</h3>
						<ShoppingListForm/>
					</Col>
					<Col md="auto">
						<ShoppingListTable/>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Button color="dark" id="logout-button">Log Out</Button>
				</Row>
			</Container>
		)
	}
}

export default ShoppingList;