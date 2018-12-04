import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import '../App.css'

import PDF from '../Resume.pdf'

class DropdownMenu extends Component {
  render() {
    return (
      <Menu secondary vertical fluid floated id="VerticalNavBar">
        <Menu.Item name="Home" onClick={this.handleClick} href="/">
          Home
        </Menu.Item>
        <Menu.Item name="About" onClick={this.handleClick} href='/about'>
          About
        </Menu.Item>
        <Menu.Item name="Contact" onClick={this.handleClick} href='/contact'>
          Contact & Links
        </Menu.Item>
        <Menu.Item name="Resume" onClick={this.handleClick} href={PDF} target="_blank" rel="noopener noreferrer">
          Resume
        </Menu.Item>
      </Menu>
    )
  }
}

export default DropdownMenu
