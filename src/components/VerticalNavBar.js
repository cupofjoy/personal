import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import PDF from '../Resume.pdf'

class DropdownMenu extends Component {
  state = { activeItem: "Home"}
  handleClick = (event, {name}) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Menu secondary vertical>
        <Menu.Item name="Home" onClick={this.handleClick}>
          <Link active={activeItem==='Home'} onClick={this.handleClick} className="ui inverted item" to="/" > Home </Link>
        </Menu.Item>
        <Menu.Item name="About">
          <Link className="ui inverted item" to="/about" > About </Link>
        </Menu.Item>
        <Menu.Item name="Contact">
          <Link className="ui inverted item" to="/contact" > Contact & Links </Link>
        </Menu.Item>
        <Menu.Item name="Resume">
          <a className="ui inverted item" href={PDF} target="_blank" rel="noopener noreferrer"><i area-hidden="true" />Resume</a>
        </Menu.Item>
      </Menu>
    )
  }
}

export default DropdownMenu
