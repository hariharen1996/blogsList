import {Component} from 'react'
import './index.css'

class UserInfo extends Component {
  render() {
    return (
      <div className="user-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
          className="user-img"
          alt="profile"
        />
        <h1 className="user-heading">Wade Warren</h1>
        <p className="user-text">Software developer at UK</p>
      </div>
    )
  }
}

export default UserInfo
