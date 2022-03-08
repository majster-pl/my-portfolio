import { Link } from 'react-scroll'
import { Fade } from 'react-reveal';
import { Container } from 'react-bootstrap';

const AboutMe = ({ id }) => {
    return (
      <div id={id} className="w-100 m-0 p-0">
        <Container className="py-5 unselectable">
          <Fade top cascade>
            <p className="fs-1 text-gray fw-bold">About Me</p>
          </Fade>

          <div className="fs-3 fw-light">
            <Fade bottom>
              <p className="text-justify">
                My name is Szymon, I’m freelance full stack web developer based
                in Bristol UK. I have begun my coding journey back in 2011 and
                it started out as a hobby by developing Linux desktop
                applications using GTK for a front-end and Python in the
                back-end. One of my desktop aplications was{" "}
                <a
                  rel="noreferrer"
                  href="http://linuxg.net/ubuntu-touch-manager-how-to-install-and-test-ubuntu-touch-manager-on-ubuntu-13-04-12-10-12-04/"
                  target="_blank"
                >
                  Ubuntu Touch Manager
                </a>
                .
              </p>
              <p className="text-justify">
                After adventure with desktop applications I got involved in open
                source projects developing mobile application for newly (back
                then) created operating system{" "}
                <a
                  rel="noreferrer"
                  href="https://en.wikipedia.org/wiki/Ubuntu_Touch"
                  target="_blank"
                >
                  Ubuntu Touch
                </a>{" "}
                by{" "}
                <a rel="noreferrer" href="https://ubuntu.com/" target="_blank">
                  Cannonical
                </a>
                . I was developing applications which you can download from{" "}
                <a
                  rel="noreferrer"
                  href="https://open-store.io/?sort=relevance&amp;search=author%3ASzymon%20Waliczek"
                  target="_blank"
                >
                  OpenStore
                </a>{" "}
                and some of them you can see in{" "}
                <Link
                  className="text-link"
                  to="projects"
                  spy={true}
                  offset={-100}
                >
                  My Projects
                </Link>
                .
              </p>
              <p className="text-justify">
                Most of my cariera I've focused on developing web applications
                using React, Laravel, HTML5, JavaScript, jQuery, CSS3 and other
                great frameworks and languages. Below you can see few of{" "}
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
                I love gadgets and learn about new technologies, I always
                looking for a ways to automate things to make a life easier.
                When possible I spent my free time to catch up with my family
                and friends.
              </p>
            </Fade>
          </div>
        </Container>
      </div>
    );
}

export default AboutMe