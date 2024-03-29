import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
    </div>
  );
}

export default AboutBC;
