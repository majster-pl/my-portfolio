import { Container, Row, Col, Image } from "react-bootstrap"
import Typist from 'react-text-typist';
import Zoom from 'react-reveal/Zoom';

const Intro = ({ id }) => {

    return (
        <div id={id} className="intro-bg-image text-white w-100 m-0 p-0">
            <svg className="intro-bg-bottom-wave" viewBox="0 0 1440 319">
                <path fill="#fff" fillOpacity="1" d="M0,96L120,122.7C240,149,480,203,720,202.7C960,203,1200,149,1320,122.7L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
            </svg>
            <Container className="intro-content">
                <Row className="justify-content-between">
                    <Col md={6} sm={12} className="intro-col text-center text-md-start">
                        <p className="fs-1 mt-4">
                            <Typist
                                loop={false}
                                showCursor={false}
                                startDelay={1000}
                                deletingSpeed={10}
                                typingSpeed={40}
                                pauseTime={2000}
                                sentences={['Hi, my name is Szymon and I\'m a freelance developer based in Bristol UK.', "Check out my recent projects below...", "Get in touch if you are looking for help to build something amazing!"]}
                            />
                        </p>
                    </Col>
                    <Col md={6} sm={8} className="text-center text-md-end">
                        <Zoom right delay={1000}>
                            <Image className="avatar-wobble m-2" src="/images/me.jpg" />
                        </Zoom>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Intro