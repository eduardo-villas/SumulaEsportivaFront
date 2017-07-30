import React, { Component } from 'react';
import {
	FormGroup,
	ControlLabel,
	FormControl,
	Button
	// ,
	// HelpBlock
} from 'react-bootstrap';
// import SexoToggle from './../../Components/SexoToggle.jsx';
import ModalidadeService from './../Modalidade/ModalidadeService';
import LigaService from './LigaService.jsx';
import EquipeService from './../Equipe/EquipeService';
import './Liga.css';

class FormularioLiga extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nome: '',
			data: '',
			cabecaDeChave: '',
			equipes: [],
			modalidade: '',
			modalidades: []
		};
		if (props.id) {
			let service = new LigaService();
			service.getById(props.id).then(this.setLiga);
		}
		let equipeService = new EquipeService();
		equipeService.findAll().then((allEquipes) => {
			let equipes = allEquipes._embedded.equipe.map((equipe) => {
				return {
					nome: equipe.nome,
					link: equipe._links.self.href
				};
			});
			this.setState({ equipes: equipes });
		});

		let modalidadeService = new ModalidadeService();
		modalidadeService.findAll().then((allModalidades) => {
			let modalidades = allModalidades._embedded.modalidade.map((modalidade) => {
				return {
					nome: modalidade.descricao,
					link: modalidade._links.self.href
				};
			});
			this.setState({ modalidades: modalidades });
		});

	}

	setLiga = (liga) => {
		this.setState({
			id: liga.id,
			nome: liga.nome,
			cabecaDeChave: liga.cabecaDeChave,
			data: liga.data,
			horario: liga.horario
			// dataNascimento: liga.dataNascimento,
			// sexo: liga.sexo,
			// email: liga.email,
			// telefone: liga.telefone,
			// endereco: liga.endereco,
			// emailValido: true
		});

		fetch(liga._links.cabecaDeChave.href).then((response) => {
			return response.json();
		}).then((cabecaDeChave) => {
			console.log(cabecaDeChave);
			this.setState({ cabecaDeChave: cabecaDeChave._links.self.href });
		});
	};

	save = () => {
		if (this.cadastroValido()) {
			let service = new LigaService();
			service.post(this.state).then(() => {
				this.props.onTelaChange('listagem');
			});
		}
	};

	cadastroValido = () => {
		let valido = true;
		// if (!this.validaEmail(this.state.email)) {
		// 	valido = false;
		// 	// this.setState({ emailValido: false });
		// }
		return valido;
	};

	// validaEmail = (email) => {
	// 	let emailPrefixoSufixo = email.split('@');
	// 	if (emailPrefixoSufixo.length !== 2) {
	// 		return false;
	// 	}
	// 	return emailPrefixoSufixo[0].length > 0 && emailPrefixoSufixo[1].length > 0;
	// };

	onChangeEmail = (email) => {
		let textEmail = email.target.value;
		this.setState({ email: textEmail });
		// if (!this.state.emailValido && this.validaEmail(textEmail)) {
		// 	this.setState({ emailValido: true });
		// }
	};

	render() {

		let equipes = this.state.equipes.map((cabecaDeChave) => {
			return <option key={cabecaDeChave.link} value={cabecaDeChave.link}>{cabecaDeChave.nome}</option>;
		});
		let modalidades = this.state.modalidades.map(modalidade => {
			return <option key={modalidade.link} value={modalidade.link}>{modalidade.nome}</option>;
		})

		equipes.unshift(<option key="" value=""></option>);
		modalidades.unshift(<option key="" value=""></option>);
		
		return (
			<form>
				<div className="row">
					<div className="col-xs-12">
						<FormGroup>
							<ControlLabel>Nome</ControlLabel>
							<FormControl
								type="text"
								value={this.state.nome}
								onChange={(nome) => { this.setState({ nome: nome.target.value }); }}
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
								onChange={(modalidade) => { this.setState({ modalidade: modalidade.target.value }); }}
							>
								{modalidades}
							</FormControl>
						</FormGroup>
					</div>
				</div> 
				<div className="row">
					<div className="col-xs-12">
						<FormGroup>
							<ControlLabel>Cabeca de Chave</ControlLabel>
							<FormControl
								componentClass="select"
								value={this.state.cabecaDeChave}
								onChange={(cabecaDeChave) => { this.setState({ cabecaDeChave: cabecaDeChave.target.value }); }}
							>
								{equipes}
							</FormControl>
						</FormGroup>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12 col-sm-3">
						<FormGroup>
							<ControlLabel>Data</ControlLabel>
							<FormControl
								type="date"
								value={this.state.data}
								onChange={(data) => { this.setState({ data: data.target.value }); }}
							/>
						</FormGroup>
					</div>
					<div className="col-xs-12 col-sm-3">
						<FormGroup>
							<ControlLabel>Horario</ControlLabel>
							<FormControl
								type="horario"
								value={this.state.horario}
								onChange={(horario) => { this.setState({ horario: horario.target.value }); }}
							/>
						</FormGroup>
					</div>
				</div>
				{/* <div className="row">
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
				</div> */}
				{/* <div className="col-xs-12 col-sm-1">
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
				</div> */}
				{/* <div className="row">
					<div className="col-xs-12 col-sm-6">
						<FormGroup validationState={this.state.emailValido ? null : 'error'}>
							<ControlLabel>E-mail</ControlLabel>
							<FormControl
								type="email"
								value={this.state.email}
								onChange={this.onChangeEmail}
							/>
							{emailInvalido}
							<FormControl.Feedback />
						</FormGroup>
					</div> */}
				{/* <div className="col-xs-12 col-sm-6">
						<FormGroup>
							<ControlLabel>Telefone</ControlLabel>
							<FormControl
								type="tel"
								value={this.state.telefone}
								onChange={(telefone) => {this.setState({ telefone: telefone.target.value });}}
							/>
						</FormGroup>
					</div> */}
				{/* </div> */}
				{/* <div className="row">
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
				</div> */}
				{/* <div className="row">
					<div className="col-xs-12">
						<FormGroup>
							<ControlLabel>Equipe</ControlLabel>
							<FormControl
								componentClass="select"
								value={this.state.equipe}
								onChange={(equipe) => {this.setState({ equipe: equipe.target.value });}}
							>
								{equipes}
							</FormControl>
						</FormGroup>
					</div>
				</div> */}
				<div className="row">
					<div className="col-xs-12">
						<div className="pull-right">
							<Button bsStyle="default" className="btn-margin-right" onClick={() => { this.props.onTelaChange('listagem'); }}>Cancelar</Button>
							<Button bsStyle="primary" onClick={this.save}>Salvar</Button>
						</div>
					</div>
				</div>
			</form>
		);
	}
}

export default FormularioLiga;