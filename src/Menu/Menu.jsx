import React, { Component } from 'react';
import { LinkContainer as Link } from 'react-router-bootstrap';
import { 
	Navbar,
	Nav,
	NavDropdown,
	MenuItem,
	NavItem
} from 'react-bootstrap';

class Menu extends Component {

	onMenuSelect = (event) => {
		this.props.onSelectMenu(event.target.id);
	};

	render() {
		return (
			<Navbar inverse collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to="/" id="home"><a>Súmula App</a></Link>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav>
						<NavDropdown title="Cadastros" id="menu-cadastros">
							<Link to="/pessoa"><MenuItem id="cadastro-pessoa">Pessoa</MenuItem></Link>
							<Link to="/equipe"><MenuItem id="cadastro-equipe">Equipe</MenuItem></Link>
							<Link to="/modalidade"><MenuItem id="cadastro-modalidade">Modalidade</MenuItem></Link>
							<Link to="/liga"><MenuItem id="cadastro-liga">Liga</MenuItem></Link>
							<Link to="/calendario"><MenuItem id="cadastro-calendario">Calendário</MenuItem></Link>
							<Link to="/partida"><MenuItem id="cadastro-partida">Partida</MenuItem></Link>
							<MenuItem divider />
							<Link to="/sumula"><MenuItem id="cadastro-sumula">Súmula</MenuItem></Link>
						</NavDropdown>
						<NavDropdown title="Operações" id="menu-operacoes">
							<Link to="/sorteio"><MenuItem id="operacao-sorteio">Sorteio Liga</MenuItem></Link>
							<Link to="/preenchimento-sumula"><MenuItem id="operacao-sumula">Preencher Súmula</MenuItem></Link>
						</NavDropdown>
						<NavDropdown title="Relatórios" id="menu-relatorios">
							<Link to="/relatorio-sumula"><MenuItem id="relatorio-sumula">Súmula</MenuItem></Link>
							<Link to="/relatorio-artilheiro"><MenuItem id="relatorio-artilheiro">Artilheiro</MenuItem></Link>
							<Link to="/relatorio-classificacao"><MenuItem id="relatorio-tabela">Tabela de Classificação</MenuItem></Link>
						</NavDropdown>
					</Nav>
					<Nav pullRight>
						<NavItem>Usuário</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Menu;