import React, {Component} from "react";
import {Button} from "react-bootstrap";

class ShoppingListTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: props.items,
			isItemBeingEdited: false,
			editedItemIndex: undefined
		};

		this.editItem = this.editItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.items !== this.props.items) {
			this.setState({items: this.props.items});
		}
	}

	editItem(evt) {
		const row = evt.target.parentNode.parentNode;
		const itemToEdit = this.state.items[row.rowIndex - 1];
		this.setState({isItemBeingEdited: !this.state.isItemBeingEdited}, async () => {
			row.childNodes.forEach(childNode => {
				if (childNode.className === "editable-cell") {
					childNode.contentEditable = this.state.isItemBeingEdited;
				}
			});
			if (this.state.isItemBeingEdited) {
				this.setState({editedItemIndex: row.rowIndex - 1});
			} else {
				let editedFields = {};
				const newName = row.cells[0].innerHTML;
				let newPrice = row.cells[1].innerHTML;
				let newQty = row.cells[2].innerHTML;
				newPrice = parseFloat(newPrice.replace("$", "").replace(",", ""));
				newQty = parseInt(newQty);

				let items = [...this.state.items];
				let item = {...items[this.state.editedItemIndex]};
				if (newName !== item.name) {
					editedFields.name = newName;
					item.name = newName;
				}
				if (newPrice !== parseFloat(item.price)) {
					editedFields.price = newPrice;
					item.price = newPrice;
					item.total = newPrice * item.quantity;
				}
				if (newQty !== parseInt(item.quantity)) {
					editedFields.quantity = newQty;
					item.quantity = newQty;
					item.total = newQty * item.price;
				}
				items[this.state.editedItemIndex] = item;

				const {name, price, quantity} = editedFields;
				const body = JSON.stringify({name, price, quantity});
				const res = await fetch(`/api/items/${itemToEdit._id}`, {
					method: "PATCH", body, headers: {"Content-Type": "application/json"}
				});
				if (res) {
					this.setState({items});
				}
				this.setState({editedItemIndex: undefined});
			}
		});
	}

	async deleteItem(evt) {
		const itemToDelete = this.state.items[evt.target.parentNode.parentNode.rowIndex - 1];
		const res = await fetch(`/api/items/${itemToDelete._id}`, {method: "DELETE"});
		if (res) {
			this.setState({items: this.state.items.filter(item => item._id !== itemToDelete._id)});
		}
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
					<td className="editable-cell">{name}</td>
					<td className="editable-cell">{price}</td>
					<td className="editable-cell">{quantity}</td>
					<td>{total}</td>
					<td>
						<Button className="edit-button" variant="secondary" onClick={this.editItem}>
							{this.state.isItemBeingEdited && this.state.editedItemIndex === index 
								? "Submit"
								: "Edit"
							}
						</Button>
					</td>
					<td>
						<Button className="delete-button" variant="danger" onClick={this.deleteItem}>X</Button>
					</td>
				</tr>
			);
		});
	}

	render() {
		return (
			<div>
				<h3 className="header">Items</h3>
				{this.state.items.length > 0
					? <table className="table">
						<tbody>
							{this.renderTableHeader()}
							{this.renderTableData()}
						</tbody>
					</table>
					: <p>Shopping list empty</p>
				}
			</div>
		);
	}
}

export default ShoppingListTable;