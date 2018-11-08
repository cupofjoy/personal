import React from 'react'
import { Image } from 'semantic-ui-react'
import '../App.css';

const WelcomePage = (props) => {
  return (
    <div className="welcome" style={{paddingTop: '150px', height: '60em', opacity: '0.9'}}>
      <h2 className="ui icon center aligned header">
        <i area-hidden="true" className="coffee icon" />
        <div id="welcome" className="content">Welcome!</div>
      </h2>
    </div>
  )
}

export default WelcomePage
