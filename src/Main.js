import React from 'react';
import logo from './logo.svg';

import Group from './images/group.jpg'
import { Container, Row, Col } from 'reactstrap';
import Me from './images/me-laptop.png';

export default class Main extends React.Component {
  render() {
    return (
     <center>
        <div>
           <p>Under Construction</p>
           <a href="/about"> <img src={Me} className="image"/></a>
        </div>
     </center>
    );
  }
}