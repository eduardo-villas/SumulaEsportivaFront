import React, { Component } from 'react';
import Toggle from 'react-toggle';
import './css/SexoToggle.css'

class SexoToggle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: props.value === 'M'
		};
	}

	onChangeSexo = (sexo) => {
		this.setState({ checked: sexo.target.checked });
		this.props.onChange(sexo.target.checked);
	};

	render() {
		return (
			<Toggle 
				className="switch-sexo" 
				icons={{
					checked: <span className="switch-sexo-item">Masculino</span>,
					unchecked: <span className="switch-sexo-item">Feminino</span>
				}}
				checked={this.state.checked}
				onChange={this.onChangeSexo}
			/>
		);
	}
}

export default SexoToggle;