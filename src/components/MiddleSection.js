import { Container, Row, Col, Image } from "react-bootstrap"
import Animate from "react-smooth/lib/Animate"
import Typist from 'react-text-typist';
import { Link } from 'react-scroll'


const MiddleSection = () => {

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
        <>
            <div id="home" className="header-bg-image text-white w-100 m-0 p-0">
                <svg className="header-bg-bottom-wave" viewBox="0 0 1440 319">
                    <path fill="#fff" fillOpacity="1" d="M0,96L120,122.7C240,149,480,203,720,202.7C960,203,1200,149,1320,122.7L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
                </svg>
                <Container className="header-content">
                    <Row className="justify-content-between">
                        <Col md={6} sm={12} className="header-col text-center text-md-start">
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
                            <Animate steps={steps} className="p-0">
                                <Image className="avatar-wobble m-2" src="/images/me.jpg" />
                            </Animate>
                        </Col>
                    </Row>

                </Container>
            </div>
            <div id="about" style={{ minHeight: "30rem" }}>
                <Container>
                    <h3>About me</h3>
                    <p>My name is Szymon and I’m based in Bristol UK, some people might also know me as majster-pl. I've began my journey with coding back in 2011 as a hobby by developing Linux desktop applications using GTK for a front-end and Python in the back-end. One of my desktop aplications was <a rel="noreferrer" href="http://linuxg.net/ubuntu-touch-manager-how-to-install-and-test-ubuntu-touch-manager-on-ubuntu-13-04-12-10-12-04/" target="_blank">Ubuntu Touch Manager</a>.
                    </p>
                    <p>After my adventure with desktop applications I got involved in open source projects developing mobile application for newly (back then) created operating system <a rel="noreferrer" href="https://en.wikipedia.org/wiki/Ubuntu_Touch" target="_blank">Ubuntu Touch</a> by <a rel="noreferrer" href="https://ubuntu.com/" target="_blank">Cannonical</a>. I was developing applications which you can download for free from <a rel="noreferrer" href="https://open-store.io/?sort=relevance&amp;search=author%3ASzymon%20Waliczek" target="_blank">OpenStore</a> and some of them you can see in <Link className="text-link" to="projects" spy={true} offset={-100}>My Projects</Link>.
                    </p>
                </Container>
            </div>
            <div id="skills" style={{ minHeight: "30rem" }}>
                <Container>
                    <h3>Skills</h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
                </Container>
            </div>
            <div id="projects" style={{ minHeight: "30rem" }}>
                <Container>
                    <h3>projects</h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
                </Container>
            </div>
            <div id="contact" style={{ minHeight: "30rem" }}>
                <Container>
                    <h3>contact</h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
                </Container>
            </div>
        </>
    )
}

export default MiddleSection