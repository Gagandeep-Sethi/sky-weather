import React from 'react'
import logo from '../images/logo.png'
import { github_URL } from '../utils/constants'
import github_logo from '../images/github-logo.png'

const Header = () => {
  return (
    <div>
        <div>
            <img src={logo} alt='logo'/>
        </div>
        <div>


        </div>
        <div>
            <a href={github_URL} target="_blank" rel="noopener noreferrer">
                <img src={github_logo} alt='logo'/>

            </a>
        </div>

    </div>
  )
}

export default Header