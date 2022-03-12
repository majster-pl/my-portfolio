import { useState } from "react";
import { Col, Row, Image } from "react-bootstrap";
import Jump from "react-reveal/Jump";

const Skill = ({ index, url, title }) => {
  const [startAnim, setStartAnim] = useState(false);

  const trigerAnimation = () => {
    setStartAnim(!startAnim);
  };


  return (
    <Col key={index}>
      <Jump spy={startAnim}>
        <Row className="m-2 p-2 skill-hover-Jump">
          <Image
            className="mb-2"
            src={url}
            onMouseEnter={trigerAnimation}
            onTouchStart={trigerAnimation}
          ></Image>
          <p className="mx-0 px-0 fs-6 fw-normal">{title}</p>
        </Row>
      </Jump>
    </Col>
  );
};

export default Skill;
