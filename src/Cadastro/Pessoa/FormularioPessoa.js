import React, { Component } from 'react';
import {
	FormGroup,
	ControlLabel,
	FormControl
} from 'react-bootstrap';
import SexoToggle from './../../Components/SexoToggle';
import './Pessoa.css';

class FormularioPessoa extends Component {
	render() {
		return (
			<form>
				<div className="row">
					<div className="col-xs-12">
						<FormGroup>
							<ControlLabel>Nome</ControlLabel>
							<FormControl
								type="text"
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
							/>
						</FormGroup>
					</div>
					<div className="col-xs-12 col-sm-3">
						<FormGroup>
							<ControlLabel>Data de nascimento</ControlLabel>
							<FormControl
								type="date"
							/>
						</FormGroup>
					</div>
					<div className="col-xs-12 col-sm-1">
						<FormGroup>
							<ControlLabel>Sexo</ControlLabel>
							<div>
								<SexoToggle/>
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
			</form>
		);
	}
}

export default FormularioPessoa;
