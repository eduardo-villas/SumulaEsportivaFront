import React, { Component } from 'react';
import { 
	Checkbox
} from 'react-bootstrap';

class LinhaListagem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: false
		};
	}

	onChangeChecked = (checked) => {
		this.setState({ checked: checked.target.checked });
	};

	onRowClick = () => {
		this.setState({ checked: !this.state.checked });
	};

	render() {
		let selectedRow;
		if (this.state.checked) {
			selectedRow = 'selected-row';
		}
		return (
			<tr className={selectedRow} onClick={this.onRowClick}>
				<td><Checkbox className='no-margin' checked={this.state.checked} onChange={this.onChangeChecked}/></td>
				{this.props.children}
			</tr>
		);
	}
}

export default LinhaListagem;