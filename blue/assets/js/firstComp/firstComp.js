import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: ''
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (<div className='home'>
        <div className='Aligner'>
          <div className='Aligner-item'>
            <img src='/' />
            <h1>Starter-Kit-2k18</h1>
            <div className='menu'>
              <ul>
                <div onClick={this.clickedBtn}>clickked this</div>
                <li><a href='' target='new'></a></li>
                <li><a href='' target='new'></a></li>
              </ul>
            </div>
            <div className='version-num'>
              version 2.0.18
            </div>
            <br />
            <a className='github-button' href='' data-icon='octicon-star' data-style='mega' data-count-href='' data-count-api='' data-count-aria-label='#' aria-label='S'>Star</a>
          </div>
        </div>
      </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
