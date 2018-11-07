import React from 'react';
import { withRouter } from 'react-router-dom';

const BottomNavBar = (props) => {
  return (
    <div className="ui fluid icon small inverted pointed three item borderless bottom fixed menu">
        <a className="ui inverted item" href="mailto:eelantung@gmail.com" style={{color: 'white'}}>Email</a>
        <a
          className="ui inverted item"
          href="https://docs.google.com/document/d/17sRsjpl5YxJYddlepE0uvrJG5rfat8S8pUVvF-oUROg/edit?usp=sharing"
          target="_blank" rel="noopener noreferrer">
          Resume
        </a>
        {/* <p className="ui one column stackable center aligned page bottom grid">
          <i className="copyright outline icon"/>
          Eelan Tung
        </p> */}
        <p className="ui inverted item" style={{fontSize: '12px'}} >
          <i className="copyright outline icon" />
            2018 Eelan Tung. All rights reserved
          </p>
      </div>
  )
}

export default withRouter(BottomNavBar)
