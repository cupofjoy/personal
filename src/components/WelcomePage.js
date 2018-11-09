import React from 'react'
// import { Image } from 'semantic-ui-react'
import '../App.css';

const WelcomePage = (props) => {
  return (
    <div className="welcome" style={{paddingTop: '150px', height: '60em', opacity: '0.9'}}><br/>
      <h2>
        <i area-hidden="true" className="code teal large icon" />
        <i area-hidden="true" className="camera grey large icon" />
        <i area-hidden="true" className="coffee blue large icon" />
      </h2><br/>
      <h2 className="ui icon center aligned header">
        <div id="welcome" className="content">Welcome !</div>
      </h2>
    </div>
  )
}

export default WelcomePage
