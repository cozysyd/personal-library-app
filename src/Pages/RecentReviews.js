import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";

function RecentReviews() {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            House of Flame and Shadow by Sarah J. Maas
          </Accordion.Header>
          <Accordion.Body>
            I devoured this in 2 days. I know there are a lot of mixed reviews
            but for me personally, I just had the best time reading this. I
            laughed, I cried, I gasped…might not be the perfect book objectively
            but it was the ending I didn’t know I needed.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Fledgling by Octavia E. Butler</Accordion.Header>
          <Accordion.Body>
            Very thought provoking and a really interesting take on vampire
            lore. I'm definitely going to be thinking about this one for a
            while.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            We Were Never Here by Andrea Bartz
          </Accordion.Header>
          <Accordion.Body>
            The first half had me hooked, but then as everything unfolded in the
            last 100 pages the story felt kind of messy and left me very
            unsatisfied. The last few paragraphs especially left me kind of
            confused and questioning everything I just read. But overall, it was
            a great premise and a fun thriller.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default RecentReviews;
