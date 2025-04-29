import React from 'react'

const Header = () => {
  return (
    <div>
        <header className="header">
      <a href="#home" className="portfolio-logo">Portfolio</a>
      <i className="fa-solid fa-bars" id="menu-bar-icone"></i>
      <nav className="navbar-container">
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#services">Services</a>
        <a href="#project">Projects</a>
        <a href="#certificates">Certificates</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
    </div>
  )
}

export default Header