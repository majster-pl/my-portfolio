import { useState } from "react";
import { Col, Row, Image } from "react-bootstrap";
import VisibilitySensor from "react-visibility-sensor";
import Jello from "react-reveal/Jello";

const Skill = ({ index, url, title }) => {
  const [visable, setVisable] = useState(false);

  const randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min + 1)) + min) * 300;
  } 

  return (
    <VisibilitySensor
      onChange={(isVisible) => {
        setVisable(isVisible);
      }}
    >
      <Col key={index}>
        <Jello spy={visable} delay={randomNumber(1,11)}>
          <Row className="m-2 p-2 skill-hover-zoom">
            <Image className="mb-2" src={url}></Image>
            <p className="fs-5 fw-normal">{title}</p>
          </Row>
        </Jello>
      </Col>
    </VisibilitySensor>
  );
};

export default Skill;
