import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Particle from "../Particle";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={5} style={{ paddingBottom: 30 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "400px" }}
              />
            </Col>

            <Col md={7} className="home-header">
              <p style={{ paddingBottom: 15 }} className="heading">
                Welcome
                <span className="wave" role="img" aria-labelledby="wave"> &nbsp; 🌐 </span>
              </p>

              <p className="heading-name">
                I'M
                <strong className="main-name"> ZEKALMI OUSSAMA</strong>
              </p>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
