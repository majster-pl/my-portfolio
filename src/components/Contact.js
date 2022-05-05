import { useState } from "react";
import {
  Container,
  Form,
  Button,
  FloatingLabel,
  Col,
  Row,
  Spinner,
} from "react-bootstrap";
import { Fade } from "react-reveal";
import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Projects = ({ id }) => {
  const instance = axios.create({
    baseURL: "https://me.waliczek.org/",
    timeout: 1000,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application/json",
    },
  });

  const notify = () => toast("E-mail sent!");

  const [formGeneral, setFormGeneral] = useState({
    name: "",
    email: "",
    message: "",
  });

  const reviewSchema = yup.object({
    name: yup
      .string()
      .required("Name is required")
      .min(2, "Must be at least 2 characters"),
    email: yup.string().required("E-mail is required").email(),
    message: yup.string().required("Message is required").min(3),
  });

  // function to send email
  function handleSubmit(values, { setSubmitting, resetForm }) {
    async function saveCustomer() {
      let url = "send_email.php";
      try {
        const resp = await axios.post(url, values);
        console.log(resp.data);
        toast.success(
          <div>
            Email sent!
            <br /> I'll be in touch shortly 😊
          </div>
        );
        resetForm();
        setSubmitting(false);
      } catch (err) {
        console.log(err.data);
        toast.error(
          <div>
            Someting went wrong...
            <br /> E-mail not sent!
          </div>
        );
        setSubmitting(false);
      }
    }
    saveCustomer();
  }

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
        <Formik
          initialValues={formGeneral}
          validateOnChange={true}
          validationSchema={reviewSchema}
          enableReinitialize={true}
          onSubmit={handleSubmit}
        >
          {(props) => (
            <>
              <Fade bottom>
                <div>
                  <FloatingLabel
                    controlId="floatingName"
                    label="Your Name"
                    className="mb-4"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Enter you name"
                      onChange={props.handleChange("name")}
                      value={props.values.name}
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      className="d-block text-danger"
                    >
                      {props.touched.name && props.errors.name}
                    </Form.Control.Feedback>
                  </FloatingLabel>

                  <FloatingLabel
                    controlId="floatingEmail"
                    label="E-mail"
                    className="mb-4"
                  >
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      onChange={props.handleChange("email")}
                      value={props.values.email}
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      className="d-block text-danger"
                    >
                      {props.touched.email && props.errors.email}
                    </Form.Control.Feedback>
                  </FloatingLabel>
                  <FloatingLabel controlId="floatingMessage" label="Message">
                    <Form.Control
                      as="textarea"
                      placeholder="Enter your message"
                      style={{ height: "15rem" }}
                      onChange={props.handleChange("message")}
                      value={props.values.message}
                    />
                    <Form.Control.Feedback
                      type="invalid"
                      className="d-block text-danger"
                    >
                      {props.touched.message && props.errors.message}
                    </Form.Control.Feedback>
                  </FloatingLabel>

                  <Row className="justify-content-end">
                    <Col className="col-12 col-md-3 justify-content-end">
                      <Button
                        className="float-end mt-3 w-100"
                        variant="purple"
                        onClick={() => props.submitForm()}
                      >
                        {props.isSubmitting ? (
                          <>
                            <Spinner
                              className="mx-2"
                              as="span"
                              animation="grow"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                            />
                            Sending...
                          </>
                        ) : (
                          "Send"
                        )}
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Fade>
            </>
          )}
        </Formik>
      </Container>
      <ToastContainer
        theme="colored"
        position="bottom-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Projects;
