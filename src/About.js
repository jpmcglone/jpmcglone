import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Me from './images/me.jpg';

export default class About extends React.Component {
  render() {
    return (
    <Container>
      <Row>
        <Col sm="12" md="6" lg="4">
          <img src={Me} className="profile-image" />
        </Col>
        <Col sm="12" md="6" lg="8">
          <h3>About John McGlone</h3>
	      <p></p>
	      <p>Born in Brooklyn, NY, John studied Computer Science in Long Island.  He began his career in app development in 2009, and went on to work for several notable companies including <a href="https://www.imgur.com">Imgur</a>, <a href="https://www.docusign.com">DocuSign</a>, and <a href="https://www.workday.com">Workday</a>.  He’s given remote talks at universities on the topics of personal development and career success.</p>
	      <p>John now works remotely, allowing him the freedom to explore his passions.  He’s a tech enthusiast, avid gamer, VR aficionado, and has been involved in the improv scene for several years.</p>
          <p>A former self-professed progressive liberal feminist, John later developed a strong interest in forward thinking politics.  Choosing to view the world through a psychological, rather than sociological, lens, he now identifies as a small government classical liberal.  He is inspired by the work of professor <a href="https://www.jordanbpeterson.com">Jordan Peterson</a> and co-hosts a bi-monthly <a href="https://www.meetup.com/Jordan-Peterson-Study-Group/">Meetup group</a> in Raleigh, NC to share and discuss his ideas.  A proponent of liberty, personal freedom, and reason, John has become an outspoken critic of progressive leftist ideology and aims to raise awareness about what’s at stake.</p>
        </Col>
      </Row>
    </Container>
    );
  }
}