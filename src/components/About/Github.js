import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        GitHub <strong className="purple">Activity</strong>
      </h1>
      <GitHubCalendar
        username="oussamazekalmi"
        blockSize={15}
        blockMargin={5}
        color="#347fe7"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
