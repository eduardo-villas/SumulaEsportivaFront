import React, { Component } from 'react';
import {
	FormGroup,
	ControlLabel,
	FormControl,
	Button
} from 'react-bootstrap';
import Service from './ModalidadeService.jsx';

class FormularioModalidade extends Component {
	constructor(props) {
		super(props);
		this.state = {
			descricao: '',
			quantidadePeriodos: '',
			duracaoPeriodos: '',
			quantidadeTemposExtras: '',
			duracaoExtra: '',
			quantidadeTimeout: '',
			duracaoTimeout: ''
		};
		if (props.id) {
			let service = new Service();
			service.getById(props.id).then(this.setEntity);
		}
	}

	setEntity = (entity) => {
		this.setState({
			id: entity.id,
			descricao: entity.descricao,
			quantidadePeriodos: entity.tempo.quantidadePeriodos,
			duracaoPeriodos: entity.tempo.duracaoPeriodos,
			quantidadeTemposExtras: entity.tempo.quantidadeTemposExtras,
			duracaoExtra: entity.tempo.duracaoExtra,
			quantidadeTimeout: entity.tempo.quantidadeTimeout,
			duracaoTimeout: entity.tempo.duracaoTimeout
		});
	};

	save = () => {
		let service = new Service();
		let entity = {
			descricao: this.state.descricao,
			tempo: {
				quantidadePeriodos: this.state.quantidadePeriodos,
				duracaoPeriodos: this.state.duracaoPeriodos,
				quantidadeTemposExtras: this.state.quantidadeTemposExtras,
				duracaoExtra: this.state.duracaoExtra,
				quantidadeTimeout: this.state.quantidadeTimeout,
				duracaoTimeout: this.state.duracaoTimeout
			}
		}
		if (this.state.id) {
			entity.id = this.state.id;
			entity.tempo.id = this.state.id;
		}
		service.post(entity).then(() => {
			this.props.onTelaChange('listagem');
		});
	};

	render() {
		return (
			<form>
				<div className="row">
					<div className="col-xs-12">
						<FormGroup>
							<ControlLabel>Descrição</ControlLabel>
							<FormControl
								type="text"
								value={this.state.descricao}
								onChange={(descricao) => {this.setState({ descricao: descricao.target.value });}}
							/>
						</FormGroup>
					</div>
				</div>
				<div className="row">
					<fieldset className="col-xs-12 col-sm-6">
						<legend>Períodos:</legend>
						<div className="row">
							<div className="col-xs-6">
								<FormGroup>
									<ControlLabel>Quantidade</ControlLabel>
									<FormControl
										type="number"
										value={this.state.quantidadePeriodos}
										onChange={(quantidadePeriodos) => {this.setState({ quantidadePeriodos: quantidadePeriodos.target.value });}}
									/>
								</FormGroup>
							</div>
							<div className="col-xs-6">
								<FormGroup>
									<ControlLabel>Duração</ControlLabel>
									<FormControl
										type="number"
										value={this.state.duracaoPeriodos}
										onChange={(duracaoPeriodos) => {this.setState({ duracaoPeriodos: duracaoPeriodos.target.value });}}
									/>
								</FormGroup>
							</div>
						</div>
					</fieldset>
					<fieldset className="col-xs-12 col-sm-6">
						<legend>Tempos extra:</legend>
						<div className="row">
							<div className="col-xs-6">
								<FormGroup>
									<ControlLabel>Quantidade</ControlLabel>
									<FormControl
										type="number"
										value={this.state.quantidadeTemposExtras}
										onChange={(quantidadeTemposExtras) => {this.setState({ quantidadeTemposExtras: quantidadeTemposExtras.target.value });}}
									/>
								</FormGroup>
							</div>
							<div className="col-xs-6">
								<FormGroup>
									<ControlLabel>Duração</ControlLabel>
									<FormControl
										type="number"
										value={this.state.duracaoExtra}
										onChange={(duracaoExtra) => {this.setState({ duracaoExtra: duracaoExtra.target.value });}}
									/>
								</FormGroup>
							</div>
						</div>
					</fieldset>
				</div>
				<div className="row">
					<fieldset className="col-xs-12 col-sm-6">
						<legend>Timeout:</legend>
						<div className="row">
							<div className="col-xs-6">
								<FormGroup>
									<ControlLabel>Quantidade</ControlLabel>
									<FormControl
										type="number"
										value={this.state.quantidadeTimeout}
										onChange={(quantidadeTimeout) => {this.setState({ quantidadeTimeout: quantidadeTimeout.target.value });}}
									/>
								</FormGroup>
							</div>
							<div className="col-xs-6">
								<FormGroup>
									<ControlLabel>Duração</ControlLabel>
									<FormControl
										type="number"
										value={this.state.duracaoTimeout}
										onChange={(duracaoTimeout) => {this.setState({ duracaoTimeout: duracaoTimeout.target.value });}}
									/>
								</FormGroup>
							</div>
						</div>
					</fieldset>
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