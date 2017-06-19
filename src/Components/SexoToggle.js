import React, { Component } from 'react';
import Toggle from 'react-toggle';
import './css/SexoToggle.css'

class SexoToggle extends Component {
	constructor(props) {
		super(props);
		console.log(props);
	}

	render() {
		return (
			<Toggle 
				className="switch-sexo" 
				icons={{
					checked: <span className="switch-sexo-item">Masculino</span>,
					unchecked: <span className="switch-sexo-item">Feminino</span>
				}}
				defaultChecked={true}
			/>
		);
	}
}

export default SexoToggle;