import React, { Component } from 'react';
import ListagemEquipe from './ListagemEquipe.jsx';

class MainEquipe extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tela: 'listagem'
		}
	}

	onTelaChange = (tela, id) => {
		this.setState({
			tela: tela,
			id: id
		});
	}

	render() {
		let tela = <ListagemEquipe onTelaChange={this.onTelaChange}/>;
		// if (this.state.tela === 'formulario') {
		// 	tela = <FormularioPessoa onTelaChange={this.onTelaChange} id={this.state.id}/>;
		// }
		return (
			<div>
				<h3>Cadastro de equipes</h3>
				<hr/>
				{tela}
			</div>
		);
	}
}

export default MainEquipe;