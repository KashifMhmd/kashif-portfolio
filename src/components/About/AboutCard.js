import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone!, I am <span className="purple">Kashif Muhammad </span>
            from <span className="purple"> Islamabad, Pakistan.</span>
            <br />
            I'm a Professional React Js and React Native Developer.
            <br />
            <br />
          </p>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Keen to bring innovation to your life!"{" "}
          </p>
          <footer className="blockquote-footer">Kashif Muhammad</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
