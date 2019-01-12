import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from 'react-scroll-up'

import Header from './Header'
import Content from './Content'
import Footer from './Footer'

import Up from './images/up.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />

         <ScrollToTop showUnder={160} style={{bottom: "5pt", right: "5pt"}}>
  			<img src={Up} width="50pt" height="50pt"/>
		</ScrollToTop>
      </div>
    );
  }
}

export default App;
