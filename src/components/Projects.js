import { Container, Row, Col, Image } from "react-bootstrap"
import { Fade } from 'react-reveal';
import ProjectCard from "./ProjectCard";

const Projects = ({ id, openAppPreview, setAppPreviewData }) => {

    const project1 =
    {
        title: "WS-Floor",
        description: "Web application for managing small and medium Workshops. Responsive design, live updates and build in notifications.",
        body: `<p id="carouselItemDescription" class="fs-5 font-weight-normal text-dark">Garage Manager is complete online solution created from scratch using Laravel as an back-end API server and React as front-end. This application let you organise/plan work in your garage while automaticly updating your customers about progress on reapir. <br>Key features:
                    <ul>
                        <li>Add/Edit/Remove Customers</li>
                        <li>Add/Edit/Remove Vehicles</li>
                        <li>Add/Edit/Remvoe bookings</li>
                        <li>Multiple companies and multiple branches</li>
                        <li>Email notifiactions for customers</li>
                        <li>One week, two weeks, month - Calendar view</li>
                        <li>Drag &amp; Drop in Workshop view</li>
                        <li>Record status of every step of reapair process</li>
                    </ul>
                </p>`,
        skills: ["react", "html5", "css3", "bootstrap", "github"],
        images: [{
            original: '/images/apps/ws-floor/1.png',
        },
        {
            original: '/images/apps/ws-floor/2.png',
        },
        {
            original: '/images/apps/ws-floor/3.png',
        },
        {
            original: '/images/apps/ws-floor/4.png',
        },
        {
            original: '/images/apps/ws-floor/5.png',
        },
        {
            original: '/images/apps/ws-floor/6.png',
        },
        {
            original: '/images/apps/ws-floor/7.png',
        },
        {
            original: '/images/apps/ws-floor/8.png',
        },
        {
            original: '/images/apps/ws-floor/9.png',
        },
        {
            original: '/images/apps/ws-floor/10.png',
        },
        {
            original: '/images/apps/ws-floor/11.png',
        },
        {
            original: '/images/apps/ws-floor/12.png',
        },
        {
            original: '/images/apps/ws-floor/13.png',
        },
        {
            original: '/images/apps/ws-floor/14.png',
        },
        {
            original: '/images/apps/ws-floor/15.png',
        },
        ]
    };

    const project2 =
    {
        title: "Opaltec",
        body: "project1 description",
        skills: ["html5", "css3", "github"],

        images: [{
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        ]
    };

    return (
        <div id={id} className="w-100 m-0 p-0" style={{ minHeight: "35rem" }}>
            <Container className='py-5'>

                <div className="fw-light">
                    <Fade top cascade>
                        <p className='fs-1 text-gray fw-bold'>Projects</p>
                    </Fade>
                    <Fade bottom>
                        {/* <Row className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 text-center"> */}
                        <Row className="text-center">
                            <Col className="col-12 col-md-6  ">
                                <ProjectCard projectData={project1} openAppPreview={openAppPreview} setAppPreviewData={setAppPreviewData} />
                                <ProjectCard projectData={project2} />
                            </Col>
                            <Col className="col-12 col-md-6 mt-0 mt-md-5">
                                <ProjectCard projectData={project1} />
                                <ProjectCard projectData={project1} />
                            </Col>

                        </Row>
                    </Fade>
                </div>
            </Container>
        </div>
    )
}

export default Projects