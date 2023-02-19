import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Hackathon Project Initiater</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Proj. Ideas" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/ideas">Generic Ideas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/ideas">
                Specific Ideas
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/description">Proj. Description</Nav.Link>
            <Nav.Link href="/title">Proj. Title</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://devpost.com" target="_blank">
              Devpost
            </Nav.Link>
            <Nav.Link
              eventKey={2}
              href="https://github.com/srini047"
              target="_blank"
            >
              @srini047
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
