import React, { Component } from 'react';
import { 
	Checkbox
} from 'react-bootstrap';
import './Pessoa.css'

class LinhaListagemPessoa extends Component {
	render() {
		return (
			<tr>
				<td><Checkbox className="no-margin"/></td>
				<td>{this.props.pessoa.nome}</td>
				<td>{this.props.pessoa.rg}</td>
			</tr>
		);
	}
}

export default LinhaListagemPessoa;