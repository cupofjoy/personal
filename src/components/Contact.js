import React, { Component }  from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <button className="ui blue button">
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
      </div>
    )
  }
}
