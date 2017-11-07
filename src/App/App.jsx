import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'
import Menu from './../Menu/Menu.jsx'
import Home from './../Home/Home'
import Pessoa from './../Cadastro/Pessoa/PessoaMain.jsx';
import Liga from './../Cadastro/Liga/LigaMain.jsx';
import Equipe from './../Cadastro/Equipe/MainEquipe.jsx';
import Modalidade from './../Cadastro/Modalidade/MainModalidade.jsx';
import Calendario from './../Cadastro/Calendario/ListagemCalendario.jsx';
import Partida from './../Cadastro/Partida/ListagemPartida.jsx';
import Sumula from './../Cadastro/Sumula/ListagemSumula.jsx';
import Sorteio from './../Operacao/Sorteio/SorteioLiga.jsx';
import PreenchimentoSumula from './../Operacao/Sumula/PreenchimentoSumula.jsx';
import RelatorioSumula from './../Relatorio/Sumula/RelatorioSumula.jsx';
import RelatorioArtilheiro from './../Relatorio/Artilheiro/RelatorioArtilheiro.jsx';
import RelatorioClassificacao from './../Relatorio/Classificacao/RelatorioClassificacao.jsx';

class App extends Component {
	render() {
		return (
			<div>
				<Menu/>
				<div className="container main-container">
					<Router>
						<div>
							<Route exact path="/" component={Home}></Route>
							<Route path="/pessoa" component={Pessoa}></Route>
							<Route path="/liga" component={Liga}></Route>
							<Route path="/equipe" component={Equipe}></Route>
							<Route path="/modalidade" component={Modalidade}></Route>
							<Route path="/calendario" component={Calendario}></Route>
							<Route path="/partida" component={Partida}></Route>
							<Route path="/sumula" component={Sumula}></Route>
							<Route path="/sorteio" component={Sorteio}></Route>
							<Route path="/preenchimento-sumula" component={PreenchimentoSumula}></Route>
							<Route path="/relatorio-sumula" component={RelatorioSumula}></Route>
							<Route path="/relatorio-artilheiro" component={RelatorioArtilheiro}></Route>
							<Route path="/relatorio-classificacao" component={RelatorioClassificacao}></Route>
						</div>
					</Router>
				</div>
			</div>
		);
	}
}

export default App;