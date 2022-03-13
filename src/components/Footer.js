import { Nav, Stack, Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-secondary text-muted py-4">
      <Container>
        <Stack direction="horizontal" gap={3}>
          <span className="align-middle">
            © 2022 Szymon Waliczek. All rights reserved.
          </span>

          <Nav.Link
            className="ms-auto px-2 fs-3"
            rel="noreferrer"
            href="https://github.com/majster-pl/"
            target="_blank"
          >
            <i className="fa fa-github" aria-hidden="true"></i>
          </Nav.Link>
          <Nav.Link
            className="px-2 fs-3"
            rel="noreferrer"
            href="https://www.linkedin.com/in/szymon-waliczek-%F0%9F%87%BA%F0%9F%87%A6-9a0ab2177"
            target="_blank"
          >
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          </Nav.Link>
          <Nav.Link
            className="px-2  fs-3"
            rel="noreferrer"
            href="https://twitter.com/Szymon__W?t=6aFcCR7GS0AhgNP5YPbaag&s=09"
            target="_blank"
          >
            <i className="fa fa-twitter-square" aria-hidden="true"></i>
          </Nav.Link>
        </Stack>
      </Container>
    </footer>
  );
}

export default Footer;
