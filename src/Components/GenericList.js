import React, { Component } from 'react';

class GenericList extends Component {
	render() {
		return (
			<div>
				<table className="table table-striped table-hover table-bordered">
					<thead>
						<tr>
							<th className="checkbox-column"></th>
							<th>Nome</th>
							<th>RG</th>
						</tr>
					</thead>
					<tbody>
						{this.props.listagem}
					</tbody>
				</table>
			</div>
		);
	}
}

export default GenericList;