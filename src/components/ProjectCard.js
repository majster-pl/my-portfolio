import { useState } from "react";
import {
  Card,
  Row,
  Col,
  Image,
  Container,
  Button,
  Badge,
} from "react-bootstrap";
import { Fade } from "react-reveal";
import ProgressiveImage from "react-progressive-graceful-image";
import { css } from "@emotion/react";
import PulseLoader from "react-spinners/PulseLoader";
import ButtonLink from "./ButtonLink";

const ProjectCard = ({ projectData, openAppPreview, setAppPreviewData }) => {
  const openModal = () => {
    openAppPreview();
    setAppPreviewData(projectData);
  };

  const [touched, setTouched] = useState(false);

  const override = css`
    display: block;
    margin: 10rem auto;
    border-color: red;
  `;

  const onCardClicked = (e) => {
    e.stopPropagation();
    openModal();
  };

  const onLinkClicked = (e, url) => {
    e.stopPropagation();
    window.open(url, "_blank").focus();
  };

  return (
    <Fade bottom>
      <Card
        className={`mb-4 project-card shadow rounded-0 ${
          touched ? "project-card-focus" : ""
        }`}
        onClick={(e) => onCardClicked(e)}
        onTouchStart={() => setTouched(true)}
        onTouchEnd={() =>
          setTimeout(() => {
            setTouched(false);
          }, 200)
        }
        onMouseEnter={() => setTouched(true)}
        onMouseLeave={() => setTouched(false)}
      >
        <ProgressiveImage
          src={`/images/apps/${projectData.title
            .toLowerCase()
            .replaceAll(" ", "-")}/${projectData.avatar}`}
          placeholder="demo.png"
        >
          {(src, loading) =>
            !loading ? (
              <div className="img-hover-zoom position-relative">
                <Badge
                  className="position-absolute top-0 start-0 m-3 rounded-0"
                  style={{ zIndex: 200 }}
                  bg="purple"
                >
                  {projectData.type}
                </Badge>
                <img
                  className="card-img-top project-avatar"
                  style={{ opacity: loading ? 0.1 : 1 }}
                  src={src}
                  alt={src}
                  sizes="10"
                />
              </div>
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

        <Card.Body className="project-bg-image text-white pb-1">
          <Card.Title className="fs-3">{projectData.title}</Card.Title>
          <Card.Text className="fs-4">{projectData.description}</Card.Text>
          <Row className="border-top align-items-center">
            <Col className="border-end mt-2 pt-1 mb-1">
              <Row className="row-cols ">
                <Col>
                  {projectData.skills.map((item, i) => {
                    return (
                      <Image
                        key={i}
                        width="25rem"
                        className="shadow me-2 mb-2"
                        title={item}
                        src={`/images/logos/${item
                          .toLocaleLowerCase()
                          .replace(" ", "")}.png`}
                      ></Image>
                    );
                  })}
                </Col>
              </Row>
            </Col>
            <Col className="">
              <Row className="justify-content-evenly">
                {typeof projectData.live_page !== "undefined" ? (
                  <Col className="col-12 col-md-6 my-2">
                    <ButtonLink
                      projectUrl={projectData.live_page}
                      linkText="Live Page"
                      LinkIcon="fa-external-link"
                    />
                  </Col>
                ) : (
                  ""
                )}

                {typeof projectData.git_page !== "undefined" ? (
                  <Col className="col-12 col-md-6 my-2">
                    <ButtonLink
                      projectUrl={projectData.git_page}
                      linkText="GitHub"
                      LinkIcon="fa-github"
                    />
                  </Col>
                ) : (
                  ""
                )}

                {typeof projectData.store_page !== "undefined" ? (
                  <Col className="col-12 col-md-6 my-2">
                    <ButtonLink
                      projectUrl={projectData.store_page}
                      linkText="Store"
                      LinkIcon="fa-shopping-bag"
                    />
                  </Col>
                ) : (
                  ""
                )}
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Fade>
  );
};

export default ProjectCard;
