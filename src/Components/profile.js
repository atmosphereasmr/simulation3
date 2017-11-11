import React, {Component} from 'react'
import './profile.css'

export default class Profile extends Component {
  render() {
    return (
      <div>
      <div className="header-bar">
        <div className="header-third">
          <h1>Helo</h1>
          <img className="tiny-icon" src={require('../images/house.png')} />
          <img className="tiny-icon" src={require('../images/search.png')} />
        </div>
        <div className="header-third">
          <h3>Dashboard</h3>
        </div>
        <div className="header-third">
          <h3>Logout</h3>
        </div>
      </div>
      <div className="main-page-container">
        <div className="edit-and-instructions-container">
          <div className="edit">
            <div className="profile-pic-main">

            </div>
            <div className="edit-profile-button">
              <h3>Edit Profile</h3>
            </div>
          </div>
          <div className="welcome-container">
            <div className="welcome-text">
            <h3>Welcome to Helo! Find recommended friends based on your similarities, and even search for them by name. The more you update your profile, the better recommendations we can make!</h3>
            </div>
          </div>
        </div>
        <div className="friend-scroller-container">

        </div>
      </div>
      </div>
    )
  }
}
