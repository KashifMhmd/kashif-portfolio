import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/plant.jpeg";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import kashifblog from "../../Assets/blogs.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "5px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Ohanna AI"
              description="its a warehouse management application used by the staff of ohanna ai warehouse.it also contain there online resume creation and c"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kashifblog}
              isBlog={false}
              title="Kashif portfolio"
              description="this is my personal portfolio.Made with React js ,Node js,bootstrap"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Khareedbaij"
              description="A online eccomerce website with three kinda users i.e Buyer,Seller and Admin. its just like a replica of Amazon made for a local organization"
              link="https://khareedbaij.web.app/#/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Taxi App"
              description="It is a restaurent delivery application used in uk by number of restaurent .it has two side driver and restaurent"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
