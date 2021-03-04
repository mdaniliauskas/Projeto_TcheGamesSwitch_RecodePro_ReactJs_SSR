import { Navbar, Nav } from 'react-bootstrap';
import Image from 'next/image'

// import './Menu.css';

function Menu () {
    return (
        <Navbar className="navbar-dark" bg="dark" expand="lg" fixed="top">
        <Navbar.Brand>
            <Image
            src="/img/TGW_Logo.png"
            alt="Produtos"
            width={150}
            height={100}
            />
            <br />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="item-menu" />
        <Navbar.Collapse id="item-menu">
            <Nav>
                <Nav.Link>Página Inicial</Nav.Link>  
                <Nav.Link>Produtos</Nav.Link>               
                <Nav.Link>Nossas lojas</Nav.Link>
                <Nav.Link>Contatos</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        
    )
}


export default Menu; 