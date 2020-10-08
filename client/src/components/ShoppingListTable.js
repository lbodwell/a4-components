import React, {Component} from "react";

class ShoppingListTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: []
		};
	}

	render() {
		return (
			<h3 className="header">Items</h3>
		)
	}
}

export default ShoppingListTable;