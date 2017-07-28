import React, { Component } from 'react';
import ModalidadeService from './../Modalidade/ModalidadeService';
import {
	FormGroup,
	ControlLabel,
	FormControl,
	Button
} from 'react-bootstrap';

class FormularioModalidade extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nome: '',
			modalidade: '',
			modalidades: []
		};
		this.buscaModalidades();
	}

	buscaModalidades() {
		new ModalidadeService().findAll().then((modalidades) => {
			this.setState({ modalidades: modalidades._embedded.modalidade });
		});
	}

	render() {
		let modalidades = this.state.modalidades.map((modalidade) => {
			return <option key={modalidade._links.self.href} value={modalidade._links.self.href}>{modalidade.descricao}</option>;
		});
		modalidades.unshift(<option key="" value=""></option>);
		return (
			<form>
				<div className="row">
					<div className="col-xs-12">
						<FormGroup>
							<ControlLabel>Nome da equipe</ControlLabel>
							<FormControl
								type="text"
								value={this.state.nome}
								onChange={(nome) => {this.setState({ nome: nome.target.value });}}
							/>
						</FormGroup>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<FormGroup>
							<ControlLabel>Modalidade</ControlLabel>
							<FormControl
								componentClass="select"
								value={this.state.modalidade}
								onChange={(modalidade) => {this.setState({ modalidade: modalidade.target.value });}}
							>
								{modalidades}
							</FormControl>
						</FormGroup>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<div className="pull-right">
							<Button bsStyle="default" className="btn-margin-right" onClick={() => {this.props.onTelaChange('listagem');}}>Cancelar</Button>
							<Button bsStyle="primary" onClick={this.save}>Salvar</Button>
						</div>
					</div>
				</div>
			</form>
		);
	}
}

export default FormularioModalidade;