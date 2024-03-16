import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { pageNotFoundImage } from "../../assets";
import "./style.css";

const PageNotFound = () => {
  return (
    <Container
      id="imageContainer"
      className="d-flex align-items-center justify-content-center"
    >
      <Row className="flex-column align-items-center">
        <Col>
          <img id="pageNotFound" src={pageNotFoundImage} alt="pageNotFound" />
        </Col>
        <Col className="text-center">
          <Link
            id="btn"
            to="/"
            className="btn text-light fw-bold rounded-3 px-4"
          >
            GO HOME!
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default PageNotFound;
