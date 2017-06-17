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
        <Menu color={'teal'} inverted borderless>
          <Menu.Item as={Link} to='/'>
            <Image src={process.env.PUBLIC_URL + 'auxy-white.png'} size='mini' />
          </Menu.Item>
          <Menu.Item style={{fontSize: '20px'}} name="About" as={Link} to="/about" />
          <Menu.Item position="right" style={{fontSize: '20px'}} name="Login" as={Link} to='/login' />
        </Menu>
      </div>
    );
  }
}
//Old Modal
// <Modal trigger={<Menu.Item position="right" style={{fontSize: '20px'}} name="Login" />}>
//   <LoginModal />
// </Modal>

export default Navbar;
