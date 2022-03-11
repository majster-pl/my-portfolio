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
import ProgressiveImage from "react-progressive-graceful-image";
import { css } from "@emotion/react";
import PulseLoader from "react-spinners/PulseLoader";

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
        <Row className="border-top pt-1">
          <Col className="mt-2">
            <Row className="row-cols">
              <Col>
                {projectData.skills.map((item, i) => {
                  return (
                    <Image
                      key={i}
                      width="20rem"
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
          <Col className="border-start">
            {typeof projectData.live_page !== "undefined" ? (
              <Button
                variant="link"
                className="pe-3 text-info"
                onClick={(e) => onLinkClicked(e, projectData.live_page)}
                target="_blank"
                rel="noreferrer"
                title="Open website with live project"
              >
                Live Page <i className="fa fa-external-link"></i>
              </Button>
            ) : (
              ""
            )}

            {typeof projectData.git_page !== "undefined" ? (
              <Button
                variant="link"
                className="ps-1"
                onClick={(e) => onLinkClicked(e, projectData.git_page)}
                target="_blank"
                rel="noreferrer"
              >
                GitHub <i className="fa fa-github" aria-hidden="true"></i>
              </Button>
            ) : (
              ""
            )}

            {typeof projectData.store_page !== "undefined" ? (
              <Button
                variant="link"
                className="ps-1"
                onClick={(e) => onLinkClicked(e, projectData.store_page)}
                target="_blank"
                rel="noreferrer"
              >
                Store <i className="fa fa-shopping-bag" aria-hidden="true"></i>
              </Button>
            ) : (
              ""
            )}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
