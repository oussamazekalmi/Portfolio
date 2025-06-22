import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I'm <span className="purple">Oussama Zekalmi</span>,{" "}
            <span className="purple"> {new Date().getFullYear() - 2003} </span> years old
            <br />
            from <span className="purple"> Oujda, Morocco</span>
            <br />
            <br />
            I work as a freelance software developer and hold a Full-Stack Developer diploma.
            <br />
            <br />
            Besides coding, I enjoy a variety of things that keep me curious and inspired:
          </p>
          <ul>
            <li className="about-activity purple">
              Playing video games
            </li>
            <li className="about-activity my-2 purple">
              Traveling and exploring new places
            </li>
            <li className="about-activity purple">
              Learning new languages
            </li>
            <li className="about-activity my-2 purple">
              Raising pets like cats and companion birds
            </li>
            <li className="about-activity purple">
              Taking care of indoor plants
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
