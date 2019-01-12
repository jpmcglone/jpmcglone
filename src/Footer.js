import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Footer extends React.Component {
  render() {
    return (
   <div class="footer">
   <Container>
      <Row>
        <Col sm="12">
          <div class="copyright">
          <p>© 2019 John McGlone</p>
     
          <p>Website by <a href="/">John McGlone</a></p>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
    );
  }
}