import React, { Component } from 'react';
import ListagemLiga from './ListagemLiga'
import FormularioLiga from './FormularioLiga';

class LigaMain extends Component {
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
		console.log('cadastro de ligas antes');
		let tela = <ListagemLiga onTelaChange={this.onTelaChange}/>;
		if (this.state.tela === 'formulario') {
			tela = <FormularioLiga onTelaChange={this.onTelaChange} id={this.state.id}/>;
		}
		console.log('cadastro de ligas depois');
		return (
			<div>
				<h3>Cadastro de ligas</h3>
				<hr/>
				{tela}
			</div>
		);
	}
}

export default LigaMain;