import React from 'react';
import project1 from '../assets/images/upload/Netflix.jpg';
import project2 from '../assets/images/upload/Nxt_Trendz.jpg';
import project3 from '../assets/images/upload/Rock_Paper_Scissors.jpg';
import project4 from '../assets/images/upload/Taskmanaging_App.jpg';
import project5 from '../assets/images/upload/Job_App.jpg';
import project6 from '../assets/images/upload/Food_Much.jpg';

const Projects = () => {
  return (
    <div>
      <section className="projects" id="project">
        <h2 className="heading">My<span> Projects</span></h2>
        <div className="project-container">

          <div className="project-card">
            <img src={project1} alt="project1" className="project-image" />
            <div className="project-content">
              <h4>Netflix Clone</h4>
              <p>
                Netflix clone website is created using ReactJS which is the
                replica of the popular streaming platform - Netflix, complete with
                similar features and user interface. Username: saira, Password:
                princess@9
              </p>
              <a href="https://reactjsmini.ccbp.tech/" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>

          <div className="project-card">
            <img src={project2} alt="project2" className="project-image" />
            <div className="project-content">
              <h4>NxT Trendz</h4>
              <p>
                NxT Trendz is an E-Commerce website built using ReactJS. It's
                a replica of Flipkart or Amazon. Username: rahul, Password:
                rahul@2021
              </p>
              <a href="https://babbutrendzz.ccbp.tech/" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>

          <div className="project-card">
            <img src={project3} alt="project3" className="project-image" />
            <div className="project-content">
              <h4>Rock Paper Scissor</h4>
              <p>
                Rock Paper Scissor is a user-friendly game developed using
                ReactJS.
              </p>
              <a href="https://babbugames.ccbp.tech/" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>

          <div className="project-card">
            <img src={project4} alt="project4" className="project-image" />
            <div className="project-content">
              <h4>Task Managing App</h4>
              <p>
                Task Managing App was created using ReactJS which allows users to
                manage their tasks efficiently.
              </p>
              <a href="https://taskmanaging.ccbp.tech/" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>

          <div className="project-card">
            <img src={project5} alt="project5" className="project-image" />
            <div className="project-content">
              <h4>Jobby App</h4>
              <p>
                Jobby was developed using ReactJS. It is a job searching
                platform. Username: rahul, Password: rahul@2021
              </p>
              <a href="https://babbucreations.ccbp.tech/login" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>

          <div className="project-card">
            <img src={project6} alt="project6" className="project-image" />
            <div className="project-content">
              <h4>Food Much</h4>
              <p>
                Food Much was built using HTML, CSS, and Flexbox. It's a
                responsive food delivery app.
              </p>
              <a href="https://foodhubmunch.ccbp.tech/" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Projects;
