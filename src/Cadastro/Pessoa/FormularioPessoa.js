import React, { Component } from 'react';
import {
	FormGroup,
	ControlLabel,
	FormControl,
	Button
} from 'react-bootstrap';
import SexoToggle from './../../Components/SexoToggle';
import './Pessoa.css';

class FormularioPessoa extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nome: '',
			rg: '',
			dataNascimento: '',
			sexo: 'M',
			email: '',
			telefone: '',
			endereco: ''
		};
	}

	save = () => {
		this.props.onTelaChange('listagem');
	};

	render() {
		return (
			<form>
				<div className="row">
					<div className="col-xs-12">
						<FormGroup>
							<ControlLabel>Nome</ControlLabel>
							<FormControl
								type="text"
								value={this.state.nome}
								onChange={(nome) => {this.setState({nome: nome.target.value});}}
							/>
						</FormGroup>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12 col-sm-6">
						<FormGroup>
							<ControlLabel>RG</ControlLabel>
							<FormControl
								type="text"
								value={this.state.rg}
								onChange={(rg) => {this.setState({rg: rg.target.value});}}
							/>
						</FormGroup>
					</div>
					<div className="col-xs-12 col-sm-3">
						<FormGroup>
							<ControlLabel>Data de nascimento</ControlLabel>
							<FormControl
								type="date"
								value={this.state.dataNascimento}
								onChange={(dataNascimento) => {this.setState({dataNascimento: dataNascimento.target.value});}}
							/>
						</FormGroup>
					</div>
					<div className="col-xs-12 col-sm-1">
						<FormGroup>
							<ControlLabel>Sexo</ControlLabel>
							<div>
								<SexoToggle value={this.state.sexo}/>
							</div>
						</FormGroup>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12 col-sm-6">
						<FormGroup>
							<ControlLabel>E-mail</ControlLabel>
							<FormControl
								type="text"
							/>
						</FormGroup>
					</div>
					<div className="col-xs-12 col-sm-6">
						<FormGroup>
							<ControlLabel>Telefone</ControlLabel>
							<FormControl
								type="text"
							/>
						</FormGroup>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<FormGroup>
							<ControlLabel>Endereço</ControlLabel>
							<FormControl
								type="text"
							/>
						</FormGroup>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<div className="pull-right">
							<Button bsStyle="primary" onClick={this.save}>Salvar</Button>
						</div>
					</div>
				</div>
			</form>
		);
	}
}

export default FormularioPessoa;