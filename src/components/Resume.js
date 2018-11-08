import React, { Fragment } from 'react'

const Resume = () => {
  return (
    <Fragment>
      <div className="ui segment" style={{paddingTop: '60px', opacity: '0.9'}}>
        <h1 className="ui center aligned container">
          Eelan Tung
          <br/>
        </h1>
        <div className="ui justified container">
          Front- and back-end developer experienced in JavaScript, Ruby, Rails, React/Redux, HTML5 and CSS. Passionate about mixing creativity and problem solving skills, built up from my math and accounting background. Aiming to find a job environment that can maximize these skills to build a better community.
        </div>
      </div>

      <div className="ui divider"/>
      <div role="list" className="ui celled list">
        <div role="listitem" className="item">
          <div className="content">
            <div className="header">Skills</div>
            <ol role="list" className="ui list">
              <li value="*" role="listitem" className="">Ruby, Rails, JavaScript, jQuery, React, Redux, HTML5, CSS, SQL/PostgreSQL</li>
              <li value="*" role="listitem" className="">RESTful architecture, MVC, TDD, APIs, Git</li>
              <li value="*" role="listitem" className="">Adobe Photoshop, Adobe Lightroom, Microsoft Word, Excel and Powerpoint</li>
            </ol>
          </div>
        </div>

        <div role="listitem" className="item">
          <div className="content">
            <div className="header">Technical Projects</div>

          </div>
        </div>

      </div>
    </Fragment>
  )
}

export default Resume
