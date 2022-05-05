import { Col, Row, Image } from "react-bootstrap";

const Skill = ({ url, title }) => {
  return (
    <Col>
      <Row className="m-2 p-2 skill-hover-Jump">
        <Image className="mb-2" src={url}></Image>
        <p className="mx-0 px-0 fs-6 fw-normal">{title}</p>
      </Row>
    </Col>
  );
};

export default Skill;
