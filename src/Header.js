import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import JP from './images/jp.jpg';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <a href="/"><img src={JP} style={{borderRadius:'20px'}} width="40px" height="40px" /></a>
          <div style={{width:'10px'}}/>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-left" navbar>
              <NavItem>
                <NavLink href="https://medium.com/@jpmcglone" target="_blank">Blog</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  YouTube
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag="a" href="https://www.youtube.com/playlist?list=PLQYhHY6AUVaFsHuSHc8K0p92YucaagvwZ" target="_blank">
                    JP Interviews
                  </DropdownItem>
                  <DropdownItem tag="a" href="https://www.youtube.com/user/jpmcglone/videos" target="_blank">
                    Channel
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag="a" href="http://www.youtube.com/subscription_center?add_user=JPMcGlone" target="_blank">
                    <div class="youtube-subscribe">
                    SUBSCRIBE
                    </div>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Social Media
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag="a" href="https://www.twitter.com/jpmcglone" target="_blank">
                    Twitter
                  </DropdownItem>
                  <DropdownItem tag="a" href="https://www.instagram.com/thejpmcglone" target="_blank">
                    Instagram
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Raleigh
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag="a" href="/resume">
                    Study   
                  </DropdownItem>
                  <DropdownItem tag="a" href="/learn-ios">
                    Learn iOS
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag="a" href="/get-coffee">
                    <div class="get-coffee">
                      Get Coffee
                    </div>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  More
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag="a" href="https://www.linkedin.com/in/jp-mcglone-18513014/" target="_blank">
                    Resume
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag="a" href="/about">
                    About
                  </DropdownItem>
                  <DropdownItem tag="a" href="/contact">
                    Contact
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink tag="a" href="/donate">
                  <button class="donate-button">
                  Donate
                  </button>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}