import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App/App.jsx';
import Pessoa from './Cadastro/Pessoa/ListagemPessoa.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-toggle/style.css';

ReactDOM.render((
	<Router>
		<div>
			<Route path="/" component={App}/>
			<Route path="/pessoa" component={Pessoa}/>
		</div>
	</Router>
	), document.getElementById('root')
);