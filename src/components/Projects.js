import { Container, Row, Col, Image } from "react-bootstrap"
import { Fade } from 'react-reveal';

const Projects = ({ id }) => {
    return (
        <div id={id} className="w-100 m-0 p-0" style={{ minHeight: "35rem" }}>
            <Container className='py-5'>
                <Fade top cascade>
                    <p className='fs-1 text-gray fw-bold'>Projects</p>
                </Fade>

                <div className="fs-3 fw-light">
                    <Fade bottom>
                        <Row className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 text-center">
                            <Col>
                                <Image src="/images/me.jpg"></Image>
                            </Col>
                            <Col >
                                <div className="p-4"></div>
                                <Image src="/images/me.jpg"></Image>
                            </Col>
                            <Col>
                                <Image src="/images/me.jpg"></Image>
                            </Col>

                        </Row>
                    </Fade>
                </div>
            </Container>
        </div>
    )
}

export default Projects