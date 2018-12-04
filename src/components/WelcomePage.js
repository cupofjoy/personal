import React from 'react'
import { Header } from 'semantic-ui-react'
import '../App.css';

const WelcomePage = (props) => {
  return (
    <Header className="welcome" style={{paddingTop: '150px', opacity: '0.9', minHeight:'650px'}}><br/>
      <h3>
        <i area-hidden="true" className="code teal large icon" />
        <i area-hidden="true" className="camera grey large icon" />
        <i area-hidden="true" className="coffee blue large icon" />
      </h3><br/>
      <h2 className="ui icon center aligned header">
        <div id="welcome" className="content">Welcome !</div>
      </h2>
    </Header>
  )
}

export default WelcomePage
