import React, { Component } from 'react';
//Semantic-UI
import { Button, Header, Image, Modal } from 'semantic-ui-react'
//Other Components
import LoginForm from './LoginForm';

class LoginModal extends Component {
  render() {
    return (
      <Modal.Content>
        <Modal.Description>
          <LoginForm />
        </Modal.Description>
      </Modal.Content>
    );
  }
}

export default LoginModal;
