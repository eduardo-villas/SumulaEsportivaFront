import React, { Component } from 'react';
import ListagemPessoa from './ListagemPessoa'
import FormularioPessoa from './FormularioPessoa';

class PessoaMain extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tela: 'listagem'
		}
	}

	onTelaChange = (tela) => {
		this.setState({ tela: tela });
	}

	render() {
		let tela = <ListagemPessoa onTelaChange={this.onTelaChange}/>;
		if (this.state.tela === 'formulario') {
			tela = <FormularioPessoa/>;
		}
		return (
			<div>
				<h3>Cadastro de pessoas</h3>
				{tela}
			</div>
		);
	}
}

export default PessoaMain;