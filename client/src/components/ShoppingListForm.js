import React, {Component} from "react";
import {Form, Button} from "react-bootstrap";

class ShoppingListForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
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
						<Form.Control type="text" placeholder="$1.00" required></Form.Control>
					</Form.Group>
				</Form.Row>
				<Button color="primary" id="logout-button">Submit</Button>
			</Form>
		)
	}
}

export default ShoppingListForm;