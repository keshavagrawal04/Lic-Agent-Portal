import { Container } from "react-bootstrap";
import "./style.css";

const Authentication = ({ children }) => {
  return (
    <>
      <Container
        id="main-container"
        className="d-flex align-items-center justify-content-center"
      >
        {children}
      </Container>
    </>
  );
};

export default Authentication;
