import React from 'react'
import './header.scss'
import logo from '../images/Group.svg'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import profile from '../../components/images/profile.png'

const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-logo-div'>
        <img src={logo} className='header-logo-img'/>
      </div>

      <div className='header-searchbar-form-container'> 
        <form className='header-searchbar-form'>
          <input
            placeholder='Search for anything'
            className='header-searchbar-form-input'
            type='text'/>
            <div className='header-searchbar-form-btn-div'>
            <button className='header-searchbar-form-btn'><SearchIcon/></button>
            </div>
            
        </form>
      </div>

      <div className='header-third-section-container'>
        <div className='header-docs-content'>
          <a className='header-doc-link' href='#'>Docs</a>
        </div>

        <div className='header-notification-icon-container'>
          <NotificationsNoneIcon className='header-notification-container'/>
        </div>

        <div className='header-profile-container'>
          <img src={profile} className='header-profile-icon'/>
          <p className='header-profile-name'>Adedeji</p>
        </div>

      </div>
    </div>
  )
}

export default Header
