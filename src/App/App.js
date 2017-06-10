import React, { Component } from 'react';
import Menu from './../Menu/Menu'
import Home from './../Home/Home'
import ListagemPessoa from './../Cadastro/Pessoa/ListagemPessoa';
import ListagemEquipe from './../Cadastro/Equipe/ListagemEquipe';
import ListagemModalidade from './../Cadastro/Modalidade/ListagemModalidade';
import ListagemLiga from './../Cadastro/Liga/ListagemLiga';
import ListagemCalendario from './../Cadastro/Calendario/ListagemCalendario';
import ListagemPartida from './../Cadastro/Partida/ListagemPartida';
import ListagemSumula from './../Cadastro/Sumula/ListagemSumula';
import SorteioLiga from './../Operacao/Sorteio/SorteioLiga'
import PreenchimentoSumula from './../Operacao/Sumula/PreenchimentoSumula'
import RelatorioSumula from './../Relatorio/Sumula/RelatorioSumula'
import RelatorioArtilheiro from './../Relatorio/Artilheiro/RelatorioArtilheiro'
import RelatorioClassificacao from './../Relatorio/Classificacao/RelatorioClassificacao'

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedMenu: 'home'
		};
	}

	onSelectMenu = (menu) => {
		this.setState({ selectedMenu: menu });
	};

	getTelaByMenuSelecionado = () => {
		const selectedMenu = this.state.selectedMenu;
		switch (selectedMenu) {
			case 'cadastro-pessoa':
				return <ListagemPessoa/>;
			case 'cadastro-equipe':
				return <ListagemEquipe/>
			case 'cadastro-modalidade':
				return <ListagemModalidade/>
			case 'cadastro-liga':
				return <ListagemLiga/>
			case 'cadastro-calendario':
				return <ListagemCalendario/>
			case 'cadastro-partida':
				return <ListagemPartida/>
			case 'cadastro-sumula':
				return <ListagemSumula/>
			case 'operacao-sorteio':
				return <SorteioLiga/>
			case 'operacao-sumula':
				return <PreenchimentoSumula/>
			case 'relatorio-sumula':
				return <RelatorioSumula/>;
			case 'relatorio-artilheiro':
				return <RelatorioArtilheiro/>;
			case 'relatorio-tabela':
				return <RelatorioClassificacao/>;
			default:
				return <Home/>
		}
	};

	render() {
		let currentMenu = this.getTelaByMenuSelecionado();
		return (
			<div>
				<Menu onSelectMenu={this.onSelectMenu}/>
				{currentMenu}
			</div>
		);
	}
}

export default App;