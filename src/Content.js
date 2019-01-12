import React from 'react';
import Main from './Main'
import About from './About'
import FourOhFour from './404'

import { Route, Link, Switch } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';

export default class Content extends React.Component {
  render() {
    return (
    <div class="container-content">
      <Container>
        <Row>
          <Col>
            <Switch>
		        <Route path="/" exact component={Main} />
		        <Route path="/about" exact component={About} />
		        <Route component={FourOhFour} />
        	</Switch>
          </Col>
       	</Row>
      </Container>
    </div>
    );
  }
}