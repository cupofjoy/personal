import React, { Component, Fragment }  from 'react'

export default class Blog extends Component {
  render() {
    return (
      <Fragment>
        <div className="ui inverted segment">
          <h2 className="ui horizontal inverted divider">Blog</h2>
          <h2 className="ui horizontal inverted divider">Work in Progress</h2>
        </div>
        <div className="ui fluid placeholder">
          <div className="image header">
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="paragraph">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div><br/>
        <div className="ui horizontal inverted divider"></div>
        <div className="ui fluid placeholder">
          <div className="image header">
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="paragraph">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div><br/>
        <div className="ui horizontal inverted divider"></div>
        <div className="ui fluid placeholder">
          <div className="image header">
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="paragraph">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </Fragment>
    )
  }
}
