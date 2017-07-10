import React, { Component } from 'react';
import LinhaListagem from './../../Components/LinhaListagem';
import './Pessoa.css';

class LinhaListagemPessoa extends Component {
	render() {
		return (
			<LinhaListagem>
				<td>{this.props.pessoa.nome}</td>
				<td>{this.props.pessoa.rg}</td>
			</LinhaListagem>
		);
	}
}

export default LinhaListagemPessoa;