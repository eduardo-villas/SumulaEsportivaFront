import React, { Component } from 'react';
import Service from './PessoaService';
import LinhaListagemPessoa from './LinhaListagemPessoa';
import PaginationControl from './../../Components/PaginationControl';
import GenericList from './../../Components/GenericList';
import HeaderPessoa from './HeaderPessoa';
import './Pessoa.css'
import { 
	Button,
	Glyphicon
} from 'react-bootstrap';

class ListagemPessoa extends Component {
	constructor(props) {
		super(props);
		this.state = {
			registros: {}
		};
		let service = new Service();
		service.getFirstPage().then(this.setRegistros);
	}

	setRegistros = (registros) => {
		this.setState({ registros: registros });
	};

	goToForm = () => {
		this.props.onTelaChange('formulario');
	};

	render() {
		let listagemRegistros = [];
		if (this.state.registros._embedded){
			listagemRegistros = this.state.registros._embedded.pessoa.map((pessoa) => {
				return <LinhaListagemPessoa key={pessoa.id} pessoa={pessoa}/>;
			});
		}
		let header = <HeaderPessoa/>;
		return (
			<div>
				<div className="row control-bar">
					<div className="col-xs-12">
						<div className="pull-right">
							<Button bsStyle="primary" onClick={this.goToForm}><Glyphicon glyph="plus" className="texted-right-icon"/>Inserir</Button>
						</div>
					</div>
				</div>
				<GenericList header={header} listagemRegistros={listagemRegistros}/>
				<PaginationControl page={this.state.registros.page} links={this.state.registros._links} onPageChange={this.setRegistros}/>
			</div>
		);
	}
}

export default ListagemPessoa;