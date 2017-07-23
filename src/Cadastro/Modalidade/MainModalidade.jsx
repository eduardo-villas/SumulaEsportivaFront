import React, { Component } from 'react';
import ListagemModalidade from './ListagemModalidade'

class MainModalidade extends Component {
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
		let tela = <ListagemModalidade onTelaChange={this.onTelaChange}/>;
		return (
			<div>
				<h3>Cadastro de modalidade</h3>
				{tela}
			</div>
		);
	}
}

export default MainModalidade;