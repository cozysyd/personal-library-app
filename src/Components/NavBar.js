import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <CustomLink to="/Home">Cozy Syd's Library</CustomLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <CustomLink to="/RecentReviews">Recent Reviews</CustomLink>
            </Nav.Link>
            <Nav.Link>
              <CustomLink to="/FavBooks">My Favorite Books</CustomLink>
            </Nav.Link>
            <NavDropdown
              title="Monthly Book Club"
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item>
                <CustomLink to="/RomanceBC">Romance</CustomLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <CustomLink to="/FantasyBC">Fantasy</CustomLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <CustomLink to="/ThrillerBC">Thriller</CustomLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <CustomLink to="/AboutBC">About Book Club</CustomLink>
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

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default NavBar;
