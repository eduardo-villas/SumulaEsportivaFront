import React, { Component } from 'react';
import { 
	Navbar,
	Nav,
	NavDropdown,
	MenuItem,
	NavItem
} from 'react-bootstrap';

class Menu extends Component {
	render() {
		return (
			<Navbar inverse collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#">Súmula App</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav>
						<NavDropdown eventKey={1} title="Cadastros" id="menu-cadastros">
							<MenuItem eventKey={1.1}>Pessoa</MenuItem>
							<MenuItem eventKey={1.2}>Equipe</MenuItem>
							<MenuItem eventKey={1.3}>Modalidade</MenuItem>
							<MenuItem eventKey={1.4}>Liga</MenuItem>
							<MenuItem eventKey={1.5}>Calendário</MenuItem>
							<MenuItem eventKey={1.6}>Partida</MenuItem>
							<MenuItem divider />
							<MenuItem eventKey={1.7}>Súmula</MenuItem>
						</NavDropdown>
						<NavDropdown eventKey={2} title="Operações" id="menu-operacoes">
							<MenuItem eventKey={2.1}>Sorteio Liga</MenuItem>
							<MenuItem eventKey={2.2}>Preencher Súmula</MenuItem>
						</NavDropdown>
						<NavDropdown eventKey={3} title="Relatórios" id="menu-relatorios">
							<MenuItem eventKey={3.1}>Súmula</MenuItem>
							<MenuItem eventKey={3.2}>Artilheiro</MenuItem>
							<MenuItem eventKey={3.2}>Tabela de Classificação</MenuItem>
						</NavDropdown>
					</Nav>
					<Nav pullRight>
						<NavItem eventKey={1}>Usuário</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Menu;