import React from 'react'
import { Card, Button, Row, Col, Image } from 'react-bootstrap';

const ProjectCard = ({ projectData, openAppPreview, setAppPreviewData }) => {
    const openModal = () => {
        openAppPreview();
        setAppPreviewData(projectData);
    }


    return (
        <Card className="mb-4 project-card shadow rounded-0" onClick={openModal}>
            <Card.Img variant="top" src={`/images/apps/${projectData.title.toLowerCase()}/demo.png`} />

            <Card.Body className='project-bg-image text-white'>
                <Card.Title className="fs-3">{projectData.title}</Card.Title>
                <Card.Text className="fs-5">{projectData.description}</Card.Text>
                <Row className='border-top'>
                    <Col className="border-end mt-2">
                        <Row className="row-cols-auto">
                            <Col >
                                {projectData.skills.map((item, i) => {
                                    return (
                                        <Image key={i} width="20rem" className="shadow me-2" src={`/images/logos/${item.toLocaleLowerCase().replace(" ", "")}.png`}></Image>
                                    )
                                })}
                            </Col>
                        </Row>

                    </Col>
                    <Col>

                    </Col>
                </Row>
            </Card.Body>

        </Card>
    )
}

export default ProjectCard