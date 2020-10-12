import React, {Component} from "react";
import {Row, Form, Button} from "react-bootstrap";

class ShoppingListForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newItem: {name: "", price: "", quantity: ""}
		}

		this.submitItem = this.submitItem.bind(this);
	}
	
	async submitItem() {
		const {name, price, quantity} = this.state.newItem;
		const body = JSON.stringify({name, price, quantity});
		const res = await fetch("/api/items", {method: "POST", body, headers:{"Content-Type": "application/json"}});
		if (res) {
			this.props.updateData();
			this.setState({newItem: {name: "", price: "", quantity: ""}});
		}
	}

	render() {
		const newItem = this.state.newItem;
		return (
			<Form>
				<Form.Row>
					<Form.Group className="form-group col-sm-12">
						<Form.Label>Name</Form.Label>
						<Form.Control type="text" value={newItem.name} onChange={evt => this.setState({newItem: {...newItem, name: evt.target.value}})} placeholder="Apple" required></Form.Control>
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group className="form-group col-md-8">
						<Form.Label>Price</Form.Label>
						<Form.Control type="text" value={newItem.price} onChange={evt => this.setState({newItem: {...newItem, price: evt.target.value}})} placeholder="$1.00" required></Form.Control>
					</Form.Group>
					<Form.Group className="form-group col-md-4">
						<Form.Label>Quantity</Form.Label>
						<Form.Control type="text" value={newItem.quantity} onChange={evt => this.setState({newItem: {...newItem, quantity: evt.target.value}})} placeholder="2" required></Form.Control>
					</Form.Group>
				</Form.Row>
				<Row className="row justify-content-center">
					<Button variant="primary" id="submit-button" onClick={this.submitItem}>Submit</Button>
				</Row>
			</Form>
		);
	}
}

export default ShoppingListForm;