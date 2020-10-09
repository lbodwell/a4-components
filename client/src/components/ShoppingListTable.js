import React, {Component} from "react";
import {Button} from "react-bootstrap";

class ShoppingListTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [
				{_id: 1, name: "Potato", price: 2, quantity: 2, total: 4.00},
				{_id: 2, name: "Apple", price: 1, quantity: 1, total: 1},
				{_id: 3, name: "abc", price: 2.5, quantity: 3, total: 7.5}
			],
			isItemBeingEdited: false,
			editedItemIndex: undefined
		};

		this.editItem = this.editItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}

	editItem(evt) {
		const itemToEdit = this.state.items[evt.target.parentNode.parentNode.rowIndex - 1];
		this.setState({isItemBeingEdited: !this.state.isItemBeingEdited});
		if (this.state.isItemBeingEdited) {
			this.setState({editedItemIndex: undefined});
			// TODO: set cells to be uneditable
			// TODO: update state with changes to fields
			//TODO: db req
		} else {
			this.setState({editedItemIndex: evt.target.parentNode.parentNode.rowIndex - 1});
			// TODO: set cells to be editable
		}
	}

	deleteItem(evt) {
		const itemToDelete = this.state.items[evt.target.parentNode.parentNode.rowIndex - 1];

		this.setState({items: this.state.items.filter(item => item._id !== itemToDelete._id)});

		//TODO: db req
	}

	renderTableHeader() {
		const headers = ["Name", "Price", "Quantity", "Total", "Edit", "Delete"];

		return (
			<tr>
				{headers.map((header, index) => <th key={index}>{header}</th>)}
			</tr>
		);
	}

	renderTableData() {
		return this.state.items.map((item, index) => {
			let {name, price, quantity, total} = item;
			price = `$${parseFloat(price).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}`;
			total = `$${parseFloat(total).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}`;
			return (
				<tr key={index}>
					<td>{name}</td>
					<td>{price}</td>
					<td>{quantity}</td>
					<td>{total}</td>
					<td>
						<Button className="edit-btn" variant="secondary" onClick={this.editItem}>{this.state.isItemBeingEdited && this.state.editedItemIndex === index ? "Submit" : "Edit"}</Button>
					</td>
					<td>
						<Button className="delete-btn" variant="danger" onClick={this.deleteItem}>X</Button>
					</td>
				</tr>
			);
		});
	}

	render() {
		return (
			<div>
				<h3 className="header">Items</h3>
				{this.state.items.length > 0 && 
					<table className="table">
						<tbody>
							{this.renderTableHeader()}
							{this.renderTableData()}
						</tbody>
					</table>
				}
			</div>
		);
	}
}

export default ShoppingListTable;