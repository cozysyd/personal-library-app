import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

function RomanceBC() {
  return (
    <div className="containerContent">
      <h1>2024 Romance Book Club</h1>
      <br />
      <Card>
        <Card.Header>March 2024 Romance Pick</Card.Header>
        <Card.Body>
          <Card.Title>Bromance Book Club by Lyssa Kay Adams</Card.Title>
          <Card.Text>
            <p>
              <strong>
                The first rule of book club: You don't talk about book club.
              </strong>
            </p>
            <p>
              Gavin Scott’s marriage is trouble. The Nashville Legends baseball
              star has recently discovered a humiliating secret: his wife Thea
              has always faked the Big O. When he loses his cool at the
              revelation, it’s the final straw on their already strained
              relationship. Thea asks for a divorce, and Gavin realizes he’s let
              his pride and fear get the better of him.
            </p>
            <p>
              <strong>Welcome to the Bromance Book Club.</strong>
            </p>
            <p>
              Distraught and desperate, Gavin finds help from an unlikely
              source: a secret romance book club made up of Nashville's top
              alpha men. With the help of their current read, a steamy Regency
              titled Courting the Countess, the guys coach Gavin on saving his
              marriage. But it'll take a lot more than flowery words and grand
              gestures for this hapless Romeo to find his inner hero and win
              back the trust of his wife.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Previous Picks</Accordion.Header>
          <Accordion.Body>
            <p>February: Book Lovers by Emily Henry</p>
            <br />
            <p>January: To Love and To Loathe by Martha Waters</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default RomanceBC;
