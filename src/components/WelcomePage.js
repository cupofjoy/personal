import React from 'react'
import '../App.css';
import { Header } from 'semantic-ui-react'

const WelcomePage = () => {
  return (
      <Header  as='h4' fluid top id="welcome" style={{ opacity: '0.9' }}><br/>
          <i area-hidden="true" className="code teal small icon" />
          <i area-hidden="true" className="camera grey small icon" />
          <i area-hidden="true" className="coffee blue small icon" />
          <br/>
        Welcome !
      </Header>
  )
}

export default WelcomePage
