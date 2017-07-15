import React, { Component } from 'react';
import LinhaListagem from './../../Components/LinhaListagem';
import './Pessoa.css';

class LinhaListagemPessoa extends Component {

	onRegistroSelect = () => {
		this.props.onRegistroSelect(this.props.pessoa.id);
	};

	onRegistroDeselect = () => {
		this.props.onRegistroDeselect(this.props.pessoa.id);
	};

	render() {
		return (
			<LinhaListagem onRegistroSelect={this.onRegistroSelect} onRegistroDeselect={this.onRegistroDeselect}>
				<td>{this.props.pessoa.nome}</td>
				<td>{this.props.pessoa.rg}</td>
			</LinhaListagem>
		);
	}
}

export default LinhaListagemPessoa;