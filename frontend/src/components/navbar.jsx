import React, { Component } from 'react';
import { Input, Menu, Segment } from 'semantic-ui-react';
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
//Other Components
import LoginModal from './LoginModal';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      loginButton: false
    }
  }
  openLoginModal() {
    this.setState({loginButton: true})
  }
  render() {
    return (
      <div>
        <Menu color={'teal'} inverted>
          <Menu.Item style={{fontSize: '20px'}} name="Home" as={Link} to='/'/>
          <Menu.Item style={{fontSize: '20px'}} name="About" as={Link} to="/about" />
          <Modal trigger={<Menu.Item position="right" style={{fontSize: '20px'}} name="Login" />}>
            <LoginModal />
          </Modal>
        </Menu>
      </div>
    );
  }
}

export default Navbar;
