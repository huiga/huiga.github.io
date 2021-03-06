import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const style = { backgroundColor: "#f5f5f5", fontStlyle: ".85em"};

  return (
    <footer style={style} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
        <a
          className="badge badge-dark"
          rel="noopener"
          href="https://github.com/huiga"
          aria-label="My GitHub"
        >
          Hashir Shoaib
        </a>{" "}
        using <i className="fab fa-react" />, edited by Eddie Xu.
        <p>
          <small className="text-muted">
            Project code is open source. Feel free to fork and make your own
            version.
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
