import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

function AboutBC() {
  return (
    <div className="containerContent">
      <Card>
        <Card.Header>What is Cozy Syd's Book Club?</Card.Header>
        <Card.Body>
          <Card.Title>
            An Opportunity to broaden your reading horizons!
          </Card.Title>
          <Card.Text>
            Join me each month as we read three books in three different genres:
            Romance, Fantasy, and Thriller. Each month, I'll share the book
            club's current pick. I'll also share the previous month's pick and a
            brief review of the book. I hope you'll join me in reading and
            discussing these books!
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Previous Picks</Accordion.Header>
          <Accordion.Body>
            <p>February: The Maidens by Alex Michaelides</p>
            <br />
            <p>January: Pretty Girls by Karin Slaughter</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AboutBC;
