import { Container, Row, Col, Image } from "react-bootstrap"
import Fade from 'react-reveal/Fade';

const Skills = ({ id }) => {
    const skillsList = [
        "React",
        "Laravel",
        "Html5",
        "CSS3",
        "JavaScript",
        "jQuery",
        "PHP",
        "Python",
        "MySQL",
        "GitHub",
        "Qt",
        "GTK",

    ]

    return (
        <div id={id} className="skills-bg-image text-white w-100 m-0 p-0">
            <Container className="py-5">
                <Fade top cascade>
                    <p className='fs-1 fw-bold'>My Skills</p>
                </Fade>

                <Row className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 text-center">
                    {skillsList.map((item, i) => {
                        return (
                            <Fade key={i} bottom delay={i * 200 + 1000}>
                                <Col className="" >
                                    <Row className="m-3">
                                        <Image className="mb-2" src={`/images/logos/new/${item.toLocaleLowerCase().replace(" ", "")}.png`}></Image>
                                        <p className="fs-5 fw-normal">{item}</p>
                                    </Row>
                                </Col>
                            </Fade>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default Skills