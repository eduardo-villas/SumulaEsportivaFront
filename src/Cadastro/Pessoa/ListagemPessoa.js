import React, { Component } from 'react';
import Service from './PessoaService';
import LinhaListagemPessoa from './LinhaListagemPessoa';
import PaginationControl from './../../Components/PaginationControl';
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
		return (
			<div>
				<div className="row control-bar">
					<div className="col-xs-12">
						<div className="pull-right">
							<Button bsStyle="primary" onClick={this.goToForm}><Glyphicon glyph="plus" className="texted-right-icon"/>Inserir</Button>
						</div>
					</div>
				</div>
				<table className="table table-striped table-hover table-bordered">
					<thead>
						<tr>
							<th className="checkbox-column"></th>
							<th>Nome</th>
							<th>RG</th>
						</tr>
					</thead>
					<tbody>
						{listagemRegistros}
					</tbody>
				</table>
				<PaginationControl page={this.state.registros.page} links={this.state.registros._links} onPageChange={this.setRegistros}/>
			</div>
		);
	}
}

export default ListagemPessoa;