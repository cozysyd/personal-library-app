import * as React from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function FavBooks() {
  return (
    <body>
      <h1>Cozy Syd's Favorite Books</h1>
      <p>Here's a favorite book of mine from each of my go to genres!</p>

      <br />

      <TopRomance />

      <hr />

      <TopFantasy />

      <hr />

      <TopThriller />
    </body>
  );
}

function TopRomance() {
  return (
    <Card className="containerBooks">
      <Card.Header>My Favorite Romance Book</Card.Header>
      <Card.Body>
        <Card.Title>Spoiler Alert by Olivia Dade</Card.Title>
        <Card.Text>
          Marcus Caster-Rupp has a secret. While the world knows him as Aeneas,
          the star of the biggest show on TV, Gods of the Gates, he's known to
          fanfiction readers as Book!AeneasWouldNever, an anonymous and popular
          poster. Marcus is able to get out his own frustrations with his
          character through his stories, especially the ones that feature the
          internet’s favorite couple to ship, Aeneas and Lavinia. But if anyone
          ever found out about his online persona, he’d be fired. Immediately.
          April Whittier has secrets of her own. A hardcore Lavinia fan, she’s
          hidden her fanfiction and cosplay hobby from her “real life” for
          years—but not anymore. When she decides to post her latest Lavinia
          creation on Twitter, her photo goes viral. Trolls and supporters alike
          are commenting on her plus-size take, but when Marcus, one half of her
          OTP, sees her pic and asks her out on a date to spite her critics, she
          realizes life is really stranger than fanfiction. Even though their
          first date is a disaster, Marcus quickly realizes that he wants much
          more from April than a one-time publicity stunt. And when he discovers
          she’s actually Unapologetic Lavinia Stan, his closest fandom friend,
          he has one more huge secret to hide from her. With love and Marcus’s
          career on the line, can the two of them stop hiding once and for all,
          or will a match made in fandom end up prematurely cancelled?
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function TopFantasy() {
  return (
    <Card className="containerBooks">
      <Card.Header>My Favorite Fantasy Book</Card.Header>
      <Card.Body>
        <Card.Title>House of Earth and Blood by Sarah J. Maas</Card.Title>
        <Card.Text>
          Bryce Quinlan had the perfect life-working hard all day and partying
          all night-until a demon murdered her closest friends, leaving her
          bereft, wounded, and alone. When the accused is behind bars but the
          crimes start up again, Bryce finds herself at the heart of the
          investigation. She'll do whatever it takes to avenge their deaths.
          Hunt Athalar is a notorious Fallen angel, now enslaved to the
          Archangels he once attempted to overthrow. His brutal skills and
          incredible strength have been set to one purpose-to assassinate his
          boss's enemies, no questions asked. But with a demon wreaking havoc in
          the city, he's offered an irresistible deal: help Bryce find the
          murderer, and his freedom will be within reach. As Bryce and Hunt dig
          deep into Crescent City's underbelly, they discover a dark power that
          threatens everything and everyone they hold dear, and they find, in
          each other, a blazing passion-one that could set them both free, if
          they'd only let it.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function TopThriller() {
  return (
    <Card className="containerBooks">
      <Card.Header>My Favorite Thriller Book</Card.Header>
      <Card.Body>
        <Card.Title>The Silent Patient by Alex Michaelides</Card.Title>
        <Card.Text>
          Alicia Berenson’s life is seemingly perfect. A famous painter married
          to an in-demand fashion photographer, she lives in a grand house with
          big windows overlooking a park in one of London’s most desirable
          areas. One evening her husband Gabriel returns home late from a
          fashion shoot, and Alicia shoots him five times in the face, and then
          never speaks another word. Alicia’s refusal to talk, or give any kind
          of explanation, turns a domestic tragedy into something far grander, a
          mystery that captures the public imagination and casts Alicia into
          notoriety. The price of her art skyrockets, and she, the silent
          patient, is hidden away from the tabloids and spotlight at the Grove,
          a secure forensic unit in North London. Theo Faber is a criminal
          psychotherapist who has waited a long time for the opportunity to work
          with Alicia. His determination to get her to talk and unravel the
          mystery of why she shot her husband takes him down a twisting path
          into his own motivations—a search for the truth that threatens to
          consume him....
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default FavBooks;
