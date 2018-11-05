import React, { Component, Fragment }  from 'react'

export default class About extends Component {
  render() {
    return (
      <Fragment>
        <div className="ui inverted segment">
          <h2 className="ui horizontal inverted divider">About Me</h2>
        </div>
        <div className="ui segment">
          <img src="https://foodiefactor.com/wp-content/uploads/2017/07/coffee-camera.jpg" className="ui medium rounded centered image" /><br/>
          <div className='ui equal width grid'>
            <div className='row'>
              <div className='column'>
                <div className='ui segment'>
                  <div role='list' class='ui centered list'>
                    <a role='listitem' className='item'>
                      <i className="coffee icon" />
                      <div className="content">
                        <div class="description">Coffee Lover</div>
                      </div>
                    </a>
                    <a role='listitem' className='item'>
                      <i className="photo icon" />
                      <div className="content">
                        <div class="description">Always taking photos of everything</div>
                      </div>
                    </a>
                    <a role='listitem' className='item'>
                      <i className="music icon" />
                      <div className="content">
                        <div class="description">Constantly blasting music and singing out of tune</div>
                      </div>
                    </a>
                    <a role='listitem' className='item'>
                      <i className="code icon" />
                      <div className="content">
                        <div class="description">Love creating things through programming</div>
                      </div>
                    </a>
                    <a role='listitem' className='item'>
                      <i className="paw icon" />
                      <div className="content">
                        <div class="description">Believes wholeheartedly that her two dogs are the cutest</div>
                      </div>
                    </a>
                    <a role='listitem' className='item'>
                      <i className="plane icon" />
                      <div className="content">
                        <div class="description">Aspires to travel the world and experience different cultures</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div><br/>
    </Fragment>
    )
  }
}
