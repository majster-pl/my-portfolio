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
          d="M0,224L80,234.7C160,245,320,267,480,234.7C640,203,800,117,960,80C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          // d="M0,224L80,240C160,256,320,288,480,256C640,224,800,128,960,80C1120,32,1280,32,1360,32L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          // d="M0,64L40,96C80,128,160,192,240,208C320,224,400,192,480,170.7C560,149,640,139,720,165.3C800,192,880,256,960,266.7C1040,277,1120,235,1200,208C1280,181,1360,171,1400,165.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          // d="M0,96L34.3,101.3C68.6,107,137,117,206,128C274.3,139,343,149,411,154.7C480,160,549,160,617,144C685.7,128,754,96,823,117.3C891.4,139,960,213,1029,224C1097.1,235,1166,181,1234,144C1302.9,107,1371,85,1406,74.7L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          // d="M0,192L48,181.3C96,171,192,149,288,133.3C384,117,480,107,576,112C672,117,768,139,864,170.7C960,203,1056,245,1152,224C1248,203,1344,117,1392,74.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
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
                showCursor={false}
                startDelay={1000}
                deletingSpeed={10}
                typingSpeed={40}
                pauseTime={2000}
                sentences={[
                  "Hi, I'm Szymon web developer and open source enthusiast from Bristol, UK",
                  "Get in touch if you need help to create something amazing!",
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
