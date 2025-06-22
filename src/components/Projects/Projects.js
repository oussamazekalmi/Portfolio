import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import gsram from "../../Assets/Projects/gsram.png";
import friouato from "../../Assets/Projects/friouato.png";
import encgo from "../../Assets/Projects/encgo.png";
import activities from "../../Assets/Projects/activities.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple"> Projects </strong> I made
        </h1>
        <h4 style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </h4>
        <Row style={{ justifyContent: "center", paddingBottom: "10px", cursor: "default" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={friouato}
              isBlog={false}
              title="Glacio"
              description="A web app for managing an ice cube distribution business. It helps the owner track monthly expenses, delivery records, client relationships, and employee work hours. It also includes charts for clear visual insights into profits and activity."
              ghLink="https://github.com/oussamazekalmi/Glac.io"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gsram}
              isBlog={false}
              title="Edumind"
              description="A complete management system built for a private school. It helps the director and secretary manage student registrations across all cycles (from preschool to high school), handle monthly tuition and transport payments, track student progression, and streamline daily operations with ease."
              ghLink="https://github.com/oussamazekalmi/Edumind"
              demoLink=""             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={encgo}
              isBlog={false}
              title="TaskFlow"
              description={
                <>
                  A task management system built for internal services of{" "}
                  <a
                    href="https://fr.wikipedia.org/wiki/%C3%89cole_nationale_de_commerce_et_de_gestion_d%27Oujda"
                    target="blank"
                    style={{ cursor: "pointer", textDecoration: "none", borderBottom: "1px white solid", paddingBottom: "1px" }}
                    className="purple"
                    title="National School of Business and Management"
                  >
                    ENCG<span className="text-white">O</span>
                  </a>{" "}
                  It enables staff to log both primary and secondary tasks, track
                  contributions transparently, and prevent disputes over task ownership.
                  The app also allows users to suggest improvements for future task
                  execution, supporting better collaboration and accountability.
                </>
              }
              ghLink="https://github.com/oussamazekalmi/TaskFlow"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={activities}
              isBlog={false}
              title="Trackivity"
              description="A web application built for managing extracurricular activities in an educational institute. It allows admins to create and archive activities, assign interns, and track detailed information. Developed using React and Node.js, the app combines functionality with a clean, elegant design."
              ghLink="https://github.com/oussamazekalmi/Trackivity"
              demoLink=""              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
