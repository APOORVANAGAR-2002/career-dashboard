import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assests/Logo_FeetWings.png";

export default function NavTop() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo}
            width='120'
            alt="company-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto " style={{ fontSize: '1.3rem', fontWeight: '600', color: '#000000' }}>
            <Nav.Link href="#products" className="p-3">Our products</Nav.Link>
            <Nav.Link href="#insights" className="p-3">Insights</Nav.Link>
            <Nav.Link href="#smartYarn" className="p-3">Smart Yarn</Nav.Link>
            <Nav.Link href="#about" className="p-3">About</Nav.Link>
            <Nav.Link href="#contact" className="p-3">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}