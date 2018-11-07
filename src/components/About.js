import React, { Component, Fragment }  from 'react'

export default class About extends Component {
  render() {
    return (
      <Fragment>
        <div className="ui centered segment" style={{paddingTop: '60px', opacity: '0.9', height: '60em', position: 'fixed'}}>
          <h2 className="ui horizontal divider">About Me</h2>
          <img src="https://foodiefactor.com/wp-content/uploads/2017/07/coffee-camera.jpg" className="ui big rounded centered image" alt="About Page" /><br/>
          <div className='ui equal width grid'>
            <div className='row'>
              <div className='column'>
                <div className='ui center aligned segment'>
                  <div role='list' class='ui center aligned list'>
                    <div role='listitem' className='item'>
                      <div className="content">
                        <div class="description">Regularly seen with a coffee cup in her hand</div>
                      </div>
                    </div>
                    <div role='listitem' className='item'>
                      <div className="content">
                        <div class="description">Always taking photos of everything</div>
                      </div>
                    </div>
                    <div role='listitem' className='item'>
                      <div className="content">
                        <div class="description">Constantly blasting music and singing out of tune when no one is looking</div>
                      </div>
                    </div>
                    <div role='listitem' className='item'>
                      <div className="content">
                        <div class="description">Love creating things through programming</div>
                      </div>
                    </div>
                    <div role='listitem' className='item'>
                      <div className="content">
                        <div className="description">Believes wholeheartedly that her two dogs are the cutest</div>
                      </div>
                    </div>
                    <div role='listitem' className='item'>
                      <div className="content">
                        <div class="description">Aspires to travel the world and experience different cultures</div>
                      </div>
                    </div>
                    <div role='listitem' className='item'>
                      <div className="content">
                        <div class="description">Out to make a difference in the world</div>
                      </div>
                    </div>
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
