import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

function ThrillerBC() {
  return (
    <div className="containerBooks">
      <h1>2024 Thriller Book Club</h1>
      <br />
      <Card>
        <Card.Header>March 2024 Thriller Pick</Card.Header>
        <Card.Body>
          <Card.Title>The Only One Left</Card.Title>
          <Card.Text>
            <p>
              Now reduced to a schoolyard chant, the Hope family murders shocked
              the Maine coast one bloody night in 1929. While most people assume
              seventeen-year-old Lenora was responsible, the police were never
              able to prove it. Other than her denial after the killings, she
              has never spoken publicly about that night, nor has she set foot
              outside Hope’s End, the cliffside mansion where the massacre
              occurred.
            </p>
            <p>
              It’s now 1983, and home-health aide Kit McDeere arrives at a
              decaying Hope’s End to care for Lenora after her previous nurse
              fled in the middle of the night. In her seventies and confined to
              a wheelchair, Lenora was rendered mute by a series of strokes and
              can only communicate with Kit by tapping out sentences on an old
              typewriter. One night, Lenora uses it to make a tantalizing
              offer—I want to tell you everything.
            </p>
            <p>
              As Kit helps Lenora write about the events leading to the Hope
              family massacre, it becomes clear there’s more to the tale than
              people know. But when new details about her predecessor’s
              departure come to light, Kit starts to suspect Lenora might not be
              telling the complete truth—and that the seemingly harmless woman
              in her care could be far more dangerous than she first thought.
            </p>
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

export default ThrillerBC;
