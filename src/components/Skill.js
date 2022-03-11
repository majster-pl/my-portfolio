import { useState } from "react";
import { Col, Row, Image } from "react-bootstrap";
import Jump from "react-reveal/Jump";

const Skill = ({ index, url, title }) => {
  const [visable, setVisable] = useState(false);
  const [mousHover, setMouseHover] = useState(false);

  const trigerAnimation = () => {
    setMouseHover(true);
    setVisable(!visable);
  };

  const stopAnimation = () => {
    setMouseHover(false);
  };

  return (
    <Col key={index}>
      <Jump spy={visable}>
        <Row className="m-2 p-2 skill-hover-Jump">
          <Image
            className="mb-2"
            src={url}
            onMouseEnter={trigerAnimation}
            onMouseLeave={stopAnimation}
            onTouchStart={trigerAnimation}
            onTouchEnd={stopAnimation}
          ></Image>
          <p className="mx-0 px-0 fs-6 fw-normal">{title}</p>
        </Row>
      </Jump>
    </Col>
  );
};

export default Skill;
