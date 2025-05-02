import React from 'react';
import myImage from '../assets/images/upload/Pavani(2).jpg'; // use renamed file

const Home = () => {
  return (
    <div>
      <section className="home" id="home">
        <div className="home-container">
          <h3>Hello, I am</h3>
          <h1>Pavani</h1>
          <h1>I'm a <span>Full Stack Developer</span></h1>
          <p>
            Building Bridges Between Front-End and Back-End, Transforming Ideas
            into Web Reality
          </p>
          <div className="socila-media-profile">
            <a
              href="https://www.linkedin.com/in/nasana-pavani/"
              target="_blank"
              className="tooltip-icon"
              rel="noreferrer"
            >
              <i className="fa-brands fa-linkedin-in"></i>
              <span className="tooltiptext-icon">LinkedIn</span>
            </a>
            <a
              href="https://github.com/Pavani17041989"
              target="_blank"
              className="tooltip-icon"
              rel="noreferrer"
            >
              <i className="fa-brands fa-github"></i>
              <span className="tooltiptext-icon">GitHub</span>
            </a>
            <a
              href="mailto:pavani.ammu426@gmail.com"
              target="_blank"
              className="tooltip-icon"
              rel="noreferrer"
            >
              <i className="fas fa-envelope"></i>
              <span className="tooltiptext-icon">Gmail</span>
            </a>
          </div>
          <a href="Pavani_Fullstack_Developer.pdf" download className="button">
            Download Resume <i className="fa-solid fa-download"></i>
          </a>
        </div>

        <div className="home-img" style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <img
            src={myImage}
            alt="Pavani"
            style={{ width: '350px', height: '350px', borderRadius: "50%", border: "5px solid #59b2f4" }}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
