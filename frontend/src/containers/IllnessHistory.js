import React, { Component } from 'react';
import { Input, Menu, Segment } from 'semantic-ui-react';
import { Button, Header, Image, Modal } from 'semantic-ui-react'

import Navbar from '../components/Navbar';
import IllnessFeed from '../components/Illness//IllnessFeed';

class IllnessHistory extends Component {

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <IllnessFeed />
      </div>
    );
  }
}

export default IllnessHistory;
