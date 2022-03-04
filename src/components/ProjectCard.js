import React from "react";
import { Card, Row, Col, Image, Container } from "react-bootstrap";
import ProgressiveImage from "react-progressive-graceful-image";
import { css } from "@emotion/react";
import PulseLoader from "react-spinners/PulseLoader";

const ProjectCard = ({ projectData, openAppPreview, setAppPreviewData }) => {
  const openModal = () => {
    openAppPreview();
    setAppPreviewData(projectData);
  };

  const override = css`
    display: block;
    margin: 10rem auto;
    border-color: red;
  `;

  return (
    <Card className="mb-4 project-card shadow rounded-0" onClick={openModal}>
      <ProgressiveImage
        src={`/images/apps/${projectData.title
          .toLowerCase()
          .replaceAll(" ", "-")}/${projectData.avatar}`}
        placeholder="demo.png"
      >
        {(src, loading) =>
          !loading ? (
            <img
              className="card-img-top project-avatar"
              style={{ opacity: loading ? 0.1 : 1 }}
              src={src}
              alt={src}
              sizes="10"
            />
          ) : (
            <Container className="text-center project-avatar-spinner">
              <PulseLoader
                color="#9d16bf"
                loading={true}
                css={override}
                size={20}
              />
            </Container>
          )
        }
      </ProgressiveImage>

      <Card.Body className="project-bg-image text-white">
        <Card.Title className="fs-3">{projectData.title}</Card.Title>
        <Card.Text className="fs-4">{projectData.description}</Card.Text>
        <Row className="border-top">
          <Col className="border-end mt-2">
            <Row className="row-cols-auto">
              <Col>
                {projectData.skills.map((item, i) => {
                  return (
                    <Image
                      key={i}
                      width="20rem"
                      className="shadow me-2"
                      src={`/images/logos/${item
                        .toLocaleLowerCase()
                        .replace(" ", "")}.png`}
                    ></Image>
                  );
                })}
              </Col>
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
