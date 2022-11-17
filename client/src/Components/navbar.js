import React from 'react'
import { FaFacebookMessenger,FaSearchLocation, FaUserFriends } from 'react-icons/fa'
import "./navbar.scss"

function navbar() {
  return (
    <div className='nav-bar'>
        <div className='nav'>
            <div className="nav-logo">
            <FaFacebookMessenger size="3rem"  />
            </div>
            <div className="nav-title">
              <h3 className='nav-title'>Messenger</h3>
            </div>
            <div className="nav-search">
            {/* <FaSearch size="2rem"  /> */}
            <FaSearchLocation size="2rem"  />
            </div>
            <div className="nav-friend-list">
              <FaUserFriends size="2rem"  />
              {/* <p>Friends List</p> */}
              {/* <FaUserFriends size="3rem"  /> */}
            </div>
            <div className="loguot">
              
            </div>
        </div>

    </div>
  )
}

export default navbar