import React from 'react'
import Logo from '../../assets/logo.svg'
import Menu from '../../assets/menu.svg';
import './Navbar.css'
function Navbar() {
    return (
        <div>
            <div className="navbar">
                <img src={Logo}/>
                
                <div className="other">
                <a href="#">Our team</a>
                <a href="#">Tokens</a>
                <a href="#">Connect wallet</a>
                <a href="#">Lightpaper</a>
                </div>
                <div className="sign">
                    <button className="signin">
                        <a href="#">sign in</a>
                    </button>
                    <button className="signup">
                    <a href="#">sign up</a>
                    </button>
                </div>
                <span className="menu-icon">
                    <img src={Menu} alt="menu-icon" />
                </span>
            </div>
            
        </div>
    )
}

export default Navbar
