import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/dev.png';

function NavigationBar() {
  return (
    <Navbar className="bg-white sticky-top opacity-90">
      <Container>
        <Navbar.Brand href="#home">
          <img
            className="logo"
            src={logo}
            alt="Sokrady Logo"
            width={50}
            height={50}
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
