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
          <Fade bottom>
            <Row className="text-center">
              <Col className="col-12 col-md-6  ">
                <ProjectCard
                  projectData={projects.project1}
                  openAppPreview={openAppPreview}
                  setAppPreviewData={setAppPreviewData}
                />
                <ProjectCard
                  projectData={projects.project2}
                  openAppPreview={openAppPreview}
                  setAppPreviewData={setAppPreviewData}
                />
                <ProjectCard
                  projectData={projects.project5}
                  openAppPreview={openAppPreview}
                  setAppPreviewData={setAppPreviewData}
                />
                <ProjectCard
                  projectData={projects.project6}
                  openAppPreview={openAppPreview}
                  setAppPreviewData={setAppPreviewData}
                />
              </Col>
              <Col className="col-12 col-md-6 mt-0 mt-md-5">
                <ProjectCard
                  projectData={projects.project3}
                  openAppPreview={openAppPreview}
                  setAppPreviewData={setAppPreviewData}
                />
                <ProjectCard
                  projectData={projects.project7}
                  openAppPreview={openAppPreview}
                  setAppPreviewData={setAppPreviewData}
                />
                <ProjectCard
                  projectData={projects.project4}
                  openAppPreview={openAppPreview}
                  setAppPreviewData={setAppPreviewData}
                />
              </Col>
            </Row>
          </Fade>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
