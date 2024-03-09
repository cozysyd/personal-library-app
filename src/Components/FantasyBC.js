import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

function FantasyBC() {
  return (
    <div className="containerContent">
      <h1>2024 Fantasy Book Club</h1>
      <br />
      <Card>
        <Card.Header>March 2024 Fantasy Pick</Card.Header>
        <Card.Body>
          <Card.Title>Bride by Ali Hazelwood</Card.Title>
          <Card.Text>
            <p>
              A dangerous alliance between a Vampyre bride and an Alpha Werewolf
              becomes a love deep enough to sink your teeth into in this new
              paranormal romance.
            </p>
            <p>
              Misery Lark, the only daughter of the most powerful Vampyre
              councilman of the Southwest, is an outcast—again. Her days of
              living in anonymity among the Humans are over: she has been called
              upon to uphold a historic peacekeeping alliance between the
              Vampyres and their mortal enemies, the Weres, and she sees little
              choice but to surrender herself in the exchange—again...
            </p>
            <p>
              Weres are ruthless and unpredictable, and their Alpha, Lowe
              Moreland, is no exception. He rules his pack with absolute
              authority, but not without justice. And, unlike the Vampyre
              Council, not without feeling. It’s clear from the way he tracks
              Misery’s every movement that he doesn’t trust her. If only he knew
              how right he was….
            </p>
            <p>
              Because Misery has her own reasons to agree to this marriage of
              convenience, reasons that have nothing to do with politics or
              alliances, and everything to do with the only thing she's ever
              cared about. And she is willing to do whatever it takes to get
              back what’s hers, even if it means a life alone in Were
              territory…alone with the wolf.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Previous Picks</Accordion.Header>
          <Accordion.Body>
            <p>February: Fledgling by Octavia E. Butler</p>
            <br />
            <p>January: House of Flame and Shadow by Sarah J. Maas</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default FantasyBC;
