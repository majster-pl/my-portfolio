import { Link } from "react-scroll";
import { Fade } from "react-reveal";
import { Container } from "react-bootstrap";

const AboutMe = ({ id }) => {
  return (
    <div id={id} className="w-100 m-0 p-0">
      <Container className="pb-5 unselectable">
        <Fade top cascade>
          <p className="fs-1 text-gray fw-bold">About Me</p>
        </Fade>

        <div className="fs-3 fw-light">
          <Fade bottom>
            <p className="text-justify">
              My name is Szymon, I'm a self taught freelance web developer based
              in Bristol, UK. My coding journey started of as a hobby back in
              2011 by developing Linux desktop applications using GTK and
              Python. One of my desktop applications was{" "}
              <a
                rel="noreferrer"
                href="http://linuxg.net/ubuntu-touch-manager-how-to-install-and-test-ubuntu-touch-manager-on-ubuntu-13-04-12-10-12-04/"
                target="_blank"
              >
                Ubuntu Touch Manager.
              </a>
            </p>
            <p className="text-justify">
              Then I got involved in Open Source projects developing mobile
              application for Linux Mobile OS -{" "}
              <a
                rel="noreferrer"
                href="https://en.wikipedia.org/wiki/Ubuntu_Touch"
                target="_blank"
              >
                Ubuntu Touch
              </a>{" "}
              but most of my career I'm focused on developing websites using
              React, Laravel, HTML5, JavaScript, CSS3. Below you can see few of{" "}
              <Link
                className="text-link"
                to="projects"
                spy={true}
                offset={-100}
              >
                My Projects
              </Link>{" "}
              and live pages to them.
            </p>
            <p className="text-justify">
              I love new technologies and gadgets, I'm always looking for a ways
              to automate things to make a life easier. When possible I spend my
              free time to teach my 7 years old son electronic and how to code
              by experimenting with MicroBit and Raspberry Pi.
            </p>
          </Fade>
        </div>
      </Container>
    </div>
  );
};

export default AboutMe;
