import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-reveal";
import ProjectCard from "./ProjectCard";
import * as projects from "../projects.js";

const Projects = ({ id, openAppPreview, setAppPreviewData }) => {
  return (
    <div
      id={id}
      className="w-100 m-0 p-0 unselectable"
      style={{ minHeight: "35rem" }}
    >
      <Container className="py-5">
        <div className="fw-light">
          <Fade top cascade>
            <p className="fs-1 text-gray fw-bold">Recent Projects</p>
          </Fade>
          <Row className="text-center">
            <Col className="col-12 col-lg-6">
              <ProjectCard
                projectData={projects.wsFloor}
                openAppPreview={openAppPreview}
                setAppPreviewData={setAppPreviewData}
              />
              <ProjectCard
                projectData={projects.queensRoadGarage}
                openAppPreview={openAppPreview}
                setAppPreviewData={setAppPreviewData}
              />
              <ProjectCard
                projectData={projects.uTorch}
                openAppPreview={openAppPreview}
                setAppPreviewData={setAppPreviewData}
              />
            </Col>
            <Col className="col-12 col-lg-6 mt-0 mt-lg-5">
              <ProjectCard
                projectData={projects.openLinkLogger}
                openAppPreview={openAppPreview}
                setAppPreviewData={setAppPreviewData}
              />
              <ProjectCard
                projectData={projects.opaltec}
                openAppPreview={openAppPreview}
                setAppPreviewData={setAppPreviewData}
              />
              <ProjectCard
                projectData={projects.ubuntuTouchManager}
                openAppPreview={openAppPreview}
                setAppPreviewData={setAppPreviewData}
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
