import React, { Component, Fragment }  from 'react'

export default class About extends Component {
  render() {
    return (
      <Fragment>
        <div style={{ opacity: '0.9' }}>
          <h2 className="ui horizontal divider">About Me</h2>
          <div className='ui centered middle aligned two column padded grid'>
            <div className='stretched row'>
              <div className='column'>
                <img src="https://foodiefactor.com/wp-content/uploads/2017/07/coffee-camera.jpg" className="ui big rounded centered image" alt="About Page" /><br/>
              </div>
              <div className='stretched middle column'>
                <div role='list' className='ui list'>
                  <div role='listitem' className='item'>
                    <div className="content">
                      <div clasNames="description">Regularly seen with a coffee cup in her hand</div>
                    </div>
                  </div>
                  <div role='listitem' className='item'>
                    <div className="content">
                      <div className="description">Always taking photos of everything</div>
                    </div>
                  </div>
                  <div role='listitem' className='item'>
                    <div className="content">
                      <div className="description">Love creating things through programming</div>
                    </div>
                  </div>
                  <div role='listitem' className='item'>
                    <div className="content">
                      <div className="description">Loves cuddling her two dogs</div>
                    </div>
                  </div>
                  <div role='listitem' className='item'>
                    <div className="content">
                      <div class="description">Aspires to travel the world and experience different cultures</div>
                    </div>
                  </div>
                  <div role='listitem' className='item'>
                    <div className="content">
                      <div className="description">Out to make a difference in the world</div>
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
