import { Container, Navbar, Nav, Col, Row, Image } from "react-bootstrap";
import Typist from 'react-text-typist';
import './css/main.css'

function App() {
  return (
    <div className="">
      <Navbar className="shadow " fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
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
      <div className="header-bg-image text-white w-100 m-0 p-0">
        <svg className="header-bg-bottom-wave" viewBox="0 0 1440 319">
          <path fill="#fff" fill-opacity="1" d="M0,96L120,122.7C240,149,480,203,720,202.7C960,203,1200,149,1320,122.7L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
        </svg>
        <Container className="header-content">
          <Row className="justify-content-between">
            <Col md={6} sm={8}>
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
            <Col md={6} sm={8} className="text-end">
                <Image className="avatar-wobble" src="/images/me.jpg" />
            </Col>
          </Row>

        </Container>
      </div>

      <Container>
        <p>Text...</p>
        <p>Text...</p>
        <p>Text...</p>
        <p>Text...</p>
        <p>Text...</p>
        <p>Text...</p>
        <p>Text...</p>
        <p>Text...</p>
        <p>Text...</p>
        <p>Text...</p>
        <p>Text...</p>
        <p>Text...</p>
        <p>Text...</p>
        <p>Text...</p>
        <p>Text...</p>
      </Container>

    </div>
  );
}

export default App;
