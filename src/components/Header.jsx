import React from 'react'
import Nav from './Nav'
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <div className="header">

        <img className="logo" src={logo} alt="Hogwarts Logo"></img>

        <Nav />

        <div className="header-spacer">Hogwartz</div>

    </div>
  )
}

export default Header
