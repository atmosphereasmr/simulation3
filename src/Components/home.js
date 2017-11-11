import React, {Component} from 'react'
import './home.css'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="background" id="background">
          <div className="login-box">
            <img className="helo-smile" src={require('../images/smile.png')} />
            <p className="helo-text">Helo</p>
            <a href="http://localhost:3000/profile">
              <div className="black-box">
              <h3>Login / Register</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
