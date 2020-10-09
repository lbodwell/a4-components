import React, {Component} from "react";
import {Form, Button} from "react-bootstrap";

class ShoppingListForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newItem: {}
		};
		this.submitItem = this.submitItem.bind(this);
	}

	submitItem() {
		// TODO: set state of new item from fields
		//TODO: db req
	}

	render() {
		return (
			<Form>
				<Form.Row>
					<Form.Group className="form-group col-sm-12">
						<Form.Label>Name</Form.Label>
						<Form.Control type="text" placeholder="Apple" required></Form.Control>
					</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group className="form-group col-md-8">
						<Form.Label>Price</Form.Label>
						<Form.Control type="text" placeholder="$1.00" required></Form.Control>
					</Form.Group>
					<Form.Group className="form-group col-md-4">
						<Form.Label>Quantity</Form.Label>
						<Form.Control type="text" placeholder="2" required></Form.Control>
					</Form.Group>
				</Form.Row>
				<Button variant="primary" id="submit-button" onClick={this.submitItem}>Submit</Button>
			</Form>	
		);
	}
}

export default ShoppingListForm;