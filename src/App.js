import { Container, Navbar, Nav, Col, Row, Image } from "react-bootstrap";
import Typist from 'react-text-typist';
import './css/main.css'

function App() {
  return (
    <div className="App">
      <Container fluid className="header-image p-0 m-0 text-white">
        <svg id="header-wave" className="" viewBox="0 0 1440 319">
          <path fill="#fff" fill-opacity="1" d="M0,96L120,122.7C240,149,480,203,720,202.7C960,203,1200,149,1320,122.7L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
        </svg>
        <Navbar className="shadow " sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <img
                alt=""
                src="/images/logo.png"
                width="45"
                // height="55"
                className="d-inline-block align-bottom me-3 py-2"
              />
              <span className="align-bottom fs-3 ">
                Szymon Waliczek
              </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              </Nav>
              <Nav className="text-uppercase">
                <Nav.Link href="#features">Intro</Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
                <Nav.Link href="#deets">Skills</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className="div-center">
          <Row className="justify-content-between w-100">
            <Col md={5} sm={12}>
              <p className="fs-2 mt-4">
                <Typist
                  loop={false}
                  showCursor={false}
                  startDelay={1000}
                  deletingSpeed={10}
                  typingSpeed={40}
                  pauseTime={5000}
                  sentences={['Hi, my name is Szymon and I\'m a freelance developer based in Bristol UK.', "You can read more about me below . . .", "Get in touch if you are looking for help to build something amazing!"]}
                />
              </p>
            </Col>
            <Col md={5} sm={12} className="text-center">
              <div className="d-block d-sm-none mt-4"></div>
              <Image className="avatar-wobble" fluid={true} src="/images/me.jpg" />
            </Col>
          </Row>
        </Container>
      </Container>
      Home
    </div>
  );
}

export default App;
