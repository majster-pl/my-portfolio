import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from 'react-scroll'
import Animate from "react-smooth/lib/Animate";


const Header = () => {
    const steps = [{
        style: {
            opacity: 0,
        },
        duration: 400,
    }, {
        style: {
            opacity: 1,
            transform: 'translate(0, 0)',
        },
        duration: 1000,
    }];

    return (
      <Navbar
        className="shadow bg-secondary unselectable"
        fixed="top"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Animate steps={steps} className="p-0">
          <Container>
            <Navbar.Brand
              as={Link}
              spy={true}
              offset={-60}
              to="intro"
            >
              <img
                alt=""
                src="/images/logo.png"
                width="30"
                className="d-inline-block align-bottom me-3 py-1"
              />
              <span className="align-bottom fs-5 ">Szymon Waliczek</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav className="text-uppercase text-white">
                <Nav.Link
                  eventKey={1.1}
                  as={Link}
                  spy={true}
                  offset={-60}
                  to="intro"
                >
                  Intro
                </Nav.Link>
                <Nav.Link
                  eventKey={1.2}
                  as={Link}
                  spy={true}
                  offset={-90}
                  to="about"
                >
                  About me
                </Nav.Link>
                <Nav.Link
                  eventKey={1.3}
                  as={Link}
                  spy={true}
                  offset={-60}
                  to="skills"
                >
                  Skills
                </Nav.Link>
                <Nav.Link
                  eventKey={1.4}
                  as={Link}
                  spy={true}
                  offset={-60}
                  to="projects"
                >
                  Projects
                </Nav.Link>
                <Nav.Link
                  eventKey={1.5}
                  as={Link}
                  spy={true}
                  offset={-60}
                  to="contact"
                >
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Animate>
      </Navbar>
    );
}

export default Header