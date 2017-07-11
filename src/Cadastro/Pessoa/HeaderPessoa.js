import React, { Component } from 'react';
import HeaderListagem from './../../Components/HeaderListagem';

class HeaderPessoa extends Component {
	render() {
		return (
			<HeaderListagem>
				<th>Nome</th>
				<th>RG</th>
			</HeaderListagem>
		);
	}
}

export default HeaderPessoa;