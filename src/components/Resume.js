import React from 'react';
import { Row, Card } from 'react-bootstrap';
import TechCards from './techCards';
import tech from '../tech';
import { AiOutlineDownload } from 'react-icons/ai';

function Resume() {
  return (
    <div className="mt-5 w-75 container bg-dark my-5 pb-5 text-light">
      <Row>
        <Card className="bg-dark my-5 border-0 px-5 text-light">
          <Card.Title className="fw-bold mb-4 fs-2">Resume</Card.Title>
          <a
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
            href="https://raw.githubusercontent.com/spaceboundbear/HW20-React-Portfolio/main/src/assets/ResumeDeveloper.jpg"
            download="resume"
          >
            <AiOutlineDownload />
            {'  '}
            Download Resume
          </a>
        </Card>
      </Row>
      <Row>
        <Card className="bg-dark my-3 border-0 px-5 text-light">
          <Card.Title className="fw-bold my-2 fs-2">Technologies</Card.Title>
          <div className="grid-container d-flex flex-wrap">
            {tech.map((technology) => (
              <TechCards
                key={technology.id}
                id={technology.id}
                icon={technology.icon}
                name={technology.name}
              />
            ))}
          </div>
        </Card>
      </Row>
    </div>
  );
}

export default Resume;
