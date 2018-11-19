import React from 'react';
import { withRouter } from 'react-router-dom';
// import PDF from '../Resume.pdf'

const BottomNavBar = (props) => {
  return (
    <div className="ui fluid icon small inverted pointed two item borderless bottom fixed menu">
        <a className="ui inverted item" href="mailto:eelantung@gmail.com" style={{color: 'white'}}>Email</a>
        <p className="ui inverted item" style={{fontSize: '12px'}} >
          <i className="copyright outline icon" />
            2018 Eelan Tung. All rights reserved
          </p>
      </div>
  )
}

export default withRouter(BottomNavBar)
