import { Col, Row, Image } from "react-bootstrap";

const Skill = ({ index, url, title }) => {
  return (
    <Col className="" key={index}>
      <Row className="m-2 p-2 skill-hover-zoom">
        <Image className="mb-2" src={url}></Image>
        <p className="fs-5 fw-normal">{title}</p>
      </Row>
    </Col>
  );
};

export default Skill;
