import {
  Container,
  Form,
  Button,
  FloatingLabel,
  Col,
  Row,
} from "react-bootstrap";
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
          <Form.Text className="text-danger"></Form.Text>
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingEmail"
          label="e-mail"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
          <Form.Text className="text-danger"></Form.Text>
        </FloatingLabel>
        <FloatingLabel controlId="floatingMessage" label="Message">
          <Form.Control
            as="textarea"
            placeholder="Enter your message"
            style={{ height: "100px" }}
          />
          <Form.Text className="text-danger"></Form.Text>
        </FloatingLabel>
        <Row className="justify-content-end">
          <Col className="col-12 col-md-3 justify-content-end">
            <Button className="float-end mt-3 w-100" variant="purple">
              Send
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
