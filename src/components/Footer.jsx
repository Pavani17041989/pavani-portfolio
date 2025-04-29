import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="footer">
      <div className="footer-container">
        <h2>Copyrights &copy; 2025</h2>
      </div>
      <div className="contact-link">
        <h2>
          Need a Portfolio Website Like This | Contact {' '}
          <a
            href="https://linkedin.com/in/nasana-pavani"
            target="_blank"
            className="tooltip"
            > Pavani <span className="tooltiptext">LinkedIn</span></a
          >
        </h2>
      </div>

      <div className="footer-icons">
        <a href="#home"><i className="fa-solid fa-angle-up"></i></a>
      </div>
    </footer>
    </div>
  )
}

export default Footer