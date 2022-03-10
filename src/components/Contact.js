import { Container, Form, FloatingLabel } from "react-bootstrap";
import { Fade } from "react-reveal";

const Projects = ({ id }) => {
  return (
    <div
      id={id}
      className="w-100 m-0 p-0 unselectable"
      style={{ minHeight: "35rem" }}
    >
      <Container className="py-5">
        <Fade top cascade>
          <p className="fs-1 text-gray fw-bold">Contact Me</p>
        </Fade>
        <FloatingLabel
          controlId="floatingName"
          label="Your Name"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Enter you name" />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingEmail"
          label="e-mail"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com"/>
        </FloatingLabel>
        <FloatingLabel controlId="floatingMessage" label="Message">
          <Form.Control
            as="textarea"
            placeholder="Enter your message"
            style={{ height: "100px" }}
          />
        </FloatingLabel>
      </Container>
    </div>
  );
};

export default Projects;
