import { Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Skill from "./Skill";

const Skills = ({ id }) => {
  const skillsList = [
    "React",
    "Laravel",
    "Html5",
    "CSS3",
    "Bootstrap",
    "JavaScript",
    "jQuery",
    "PHP",
    "Python",
    "MySQL",
    "GitHub",
    "Qt",
  ];

  return (
    <div id={id} className="skills-bg-image text-white w-100 m-0 p-0">
      <Container className="py-5 unselectable">
        <Fade top cascade>
          <p className="fs-1 fw-bold">My Skills</p>
        </Fade>

        <Row className="row row-cols-3 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 text-center">
          <Fade bottom>
            {skillsList.map((item, i) => {
              return (
                <Skill
                  index={i}
                  url={`/images/logos/${item
                    .toLocaleLowerCase()
                    .replace(" ", "")}.png`}
                  title={item}
                />
              );
            })}
          </Fade>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
