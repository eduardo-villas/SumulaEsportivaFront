import React, { Component } from 'react';
import {
	FormGroup,
	ControlLabel,
	FormControl,
	Button,
	HelpBlock
} from 'react-bootstrap';
import SexoToggle from './../../Components/SexoToggle';
import PessoaService from './PessoaService';
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
			endereco: '',
			emailValido: true
		};
	}

	save = () => {
		if (this.cadastroValido()){
			let service = new PessoaService();
			service.post(this.state).then((teste) => {
				this.props.onTelaChange('listagem');
			});
		}
	};

	cadastroValido = () => {
		let valido = true;
		if (!this.validaEmail(this.state.email)) {
			valido = false;
			this.setState({ emailValido: false });
		}
		return valido;
	};

	validaEmail = (email) => {
		let emailPrefixoSufixo = email.split('@');
		if (emailPrefixoSufixo.length !== 2) {
			return false;
		}
		return emailPrefixoSufixo[0].length > 0 && emailPrefixoSufixo[1].length > 0;
	};

	onChangeEmail = (email) => {
		let textEmail = email.target.value;
		this.setState({ email: textEmail });
		if (!this.state.emailValido && this.validaEmail(textEmail)) {
			this.setState({ emailValido: true });
		}
	};

	render() {
		let emailInvalido;
		if (!this.state.emailValido) {
			emailInvalido = <HelpBlock>E-mail inválido</HelpBlock>
		}
		return (
			<form>
				<div className="row">
					<div className="col-xs-12">
						<FormGroup>
							<ControlLabel>Nome</ControlLabel>
							<FormControl
								type="text"
								value={this.state.nome}
								onChange={(nome) => {this.setState({ nome: nome.target.value });}}
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
								onChange={(rg) => {this.setState({ rg: rg.target.value });}}
							/>
						</FormGroup>
					</div>
					<div className="col-xs-12 col-sm-3">
						<FormGroup>
							<ControlLabel>Data de nascimento</ControlLabel>
							<FormControl
								type="date"
								value={this.state.dataNascimento}
								onChange={(dataNascimento) => {this.setState({ dataNascimento: dataNascimento.target.value });}}
							/>
						</FormGroup>
					</div>
					<div className="col-xs-12 col-sm-1">
						<FormGroup>
							<ControlLabel>Sexo</ControlLabel>
							<div>
								<SexoToggle
									value={this.state.sexo}
									onChange={(selected) => {this.setState({ sexo: selected ? 'M' : 'F' });	}}
								/>
							</div>
						</FormGroup>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12 col-sm-6">
						<FormGroup validationState={this.state.emailValido ? null : 'error'}>
							<ControlLabel>E-mail</ControlLabel>
							<FormControl
								type="text"
								value={this.state.email}
								onChange={this.onChangeEmail}
							/>
							{emailInvalido}
							<FormControl.Feedback />
						</FormGroup>
					</div>
					<div className="col-xs-12 col-sm-6">
						<FormGroup>
							<ControlLabel>Telefone</ControlLabel>
							<FormControl
								type="text"
								value={this.state.telefone}
								onChange={(telefone) => {this.setState({ telefone: telefone.target.value });}}
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
								value={this.state.endereco}
								onChange={(endereco) => {this.setState({ endereco: endereco.target.value });}}
							/>
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

export default FormularioPessoa;