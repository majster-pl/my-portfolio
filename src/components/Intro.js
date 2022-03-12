import { Container, Row, Col, Image } from "react-bootstrap";
import Typist from "react-text-typist";
import Fade from "react-reveal/Fade";

const Intro = ({ id }) => {
  return (
    <div
      id={id}
      className="intro-bg-image text-white w-100 m-0 p-0 unselectable"
    >
      <svg className="intro-bg-bottom-wave" viewBox="0 0 1440 319">
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,128L80,128C160,128,320,128,480,149.3C640,171,800,213,960,197.3C1120,181,1280,107,1360,69.3L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          // d="M0,96L120,122.7C240,149,480,203,720,202.7C960,203,1200,149,1320,122.7L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
      <Container className="intro-content">
        <Row className="justify-content-between">
          <Col
            md={6}
            sm={12}
            className="intro-col text-center text-md-start mb-4"
          >
            <p className="fs-1 mt-4 mx-3">
              <Typist
                loop={false}
                cursorSmooth={true}
                startDelay={1000}
                deletingSpeed={10}
                typingSpeed={50}
                pauseTime={2500}
                sentences={[
                  "Hi! I'm Szymon, web developer and open source enthusiast from Bristol, UK",
                  "Get in touch if you need help with creating something amazing!",
                ]}
              />
            </p>
          </Col>
          <Col md={6} sm={8} className="text-center text-md-end">
            <Fade delay={500}>
              <Image className="avatar-wobble m-2" src="/images/me.jpg" />
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
