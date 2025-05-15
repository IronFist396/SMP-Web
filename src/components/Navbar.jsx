import './Navbar.css'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo2.png'

const CustomNavbar = () => {
  const location = useLocation();
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Services', path: '/services' },
  ];
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" width="120"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-links" />
        <Navbar.Collapse id="navbar-links" className="justify-content-end">
          <Nav className='links'>
            {links.map(({ name, path }) => (
              <Nav.Link
                as={Link}
                to={path}
                key={name}
                active={location.pathname === path}
              >
                {name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
