import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function Navigationsbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="https://dwb-premium.bau.de">dwb-premium.bau.de</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link eventKey="1" as={Link} to="/">Startseite</Nav.Link>
            <Nav.Link eventKey="2" as={Link} to="/neuigkeiten">Neuigkeiten</Nav.Link>
            <Nav.Link eventKey="3" as={Link} to="/projekte">Projekte</Nav.Link>
            <Nav.Link eventKey="4" as={Link} to="/kontakt">Kontakt</Nav.Link>
            {/* <Nav.Link eventKey="6" as={Link} to="/downloads">Downloads</Nav.Link> */}

          </Nav>
          <Nav>
            <Nav.Link eventKey="5" as={Link} to="/login">Login</Nav.Link>
            <Nav.Link eventKey="6" as={Link} to="/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationsbar;