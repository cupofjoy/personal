import React, { Component }  from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div style={{ opacity: '0.9', minHeight:'50em'}}>
        <h1 className="ui horizontal divider">Contact Me</h1>
        <img src="https://i.imgur.com/38tDikc.jpg" className="ui huge rounded centered image" alt="contactme" /><br/><br/>
        <div className="ui one column stackable center aligned page grid">
          <button className="ui teal button">
            <i className="envelope icon" />
            <a href="mailto:eelantung@gmail.com" style={{color: 'white'}}>Email</a>
          </button>
          <button className="ui linkedin button">
            <i className="linkedin icon" />
            <a href="https://www.linkedin.com/in/eelantung/" target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>Linkedin</a>
          </button>
          <button className="ui twitter button">
            <i className="twitter icon" />
            <a href='https://twitter.com/_eelan' target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>Twitter</a>
          </button>
          <button className="ui grey button">
            <i className="github icon" />
            <a href='https://www.github.com/cupofjoy' target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>Github</a>
          </button>
        </div>
      </div>
    )
  }
}
