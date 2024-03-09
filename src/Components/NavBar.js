import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Cozy Syd's Library</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#reviews">Recent Reviews</Nav.Link>
            <Nav.Link href="#favorites">My Favorite Books</Nav.Link>
            <NavDropdown
              title="Monthly Book Club"
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Romance</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Fantasy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Mystery/Thriller
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                About Book Club
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link
              href="https://cozysyd.github.io/cozysyd_blog/"
              target="_blank"
            >
              Blog
            </Nav.Link>
            <Nav.Link
              eventKey={2}
              href="https://www.goodreads.com/user/show/5441778-sydney"
              target="_blank"
            >
              Goodreads
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
