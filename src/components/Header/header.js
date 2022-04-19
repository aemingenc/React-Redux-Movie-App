import React from 'react'
import { Link } from 'react-router-dom'
import user from "../../images/malignant.png"
import "./header.scss"

const header = () => {
  return (
    <div className='header'>
      <Link to ="/">
        <div className='logo'>Movie APP</div>
      </Link>
      <div className='user-image'>
        <img src={user} alt="user" />
      </div>
    </div>

  )
}

export default header