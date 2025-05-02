
import React from 'react'

const Projects = () => {
  return (
    <div>
         <section className="projects" id="project">
      <h2 className="heading">My<span> Projects</span></h2>
      <div className="project-container">
        <div className="project-card">
          <img
            src="../assets/images/upload/Netflix.jpg"
            alt="project1"
            className="project-image"
          />
          <div className="project-content">
            <h4>Netflix Clone</h4>
            <p>
              Netflix clone website is created using ReactJS which is the
              replica of the popular streaming platform - Netflix, complete with
              similar features and user interface. Username: saira, Password:
              princess@9
            </p>
            <a href="https://reactjsmini.ccbp.tech/" target="_blank"
              ><i className="fa-solid fa-arrow-up-right-from-square"></i
            ></a>
          </div>
        </div>

        <div className="project-card">
          <img
            src="../assets/images/upload/Nxt_Trendz.jpg"
            alt="project2"
            className="project-image"
          />
          <div className="project-content">
            <h4>NxT Trendz</h4>
            <p>
              NxT Trendx is a E-Commerce website built using ReactJS. It's
              replica of Flipkart or Amaxon. Username: rahul, Password:
              rahul@2021
            </p>
            <a href="https://babbutrendzz.ccbp.tech/"
              ><i className="fa-solid fa-arrow-up-right-from-square"></i
            ></a>
          </div>
        </div>

        <div className="project-card">
          <img
            src="../assets/images/upload/Rock_Paper_Scissors.jpg"
            alt="project3"
            className="project-image"
          />
          <div className="project-content">
            <h4>Rock Paper Scissor</h4>
            <p>
              Rock Paper Scissor is an user friendly game developed using
              ReactJS.
            </p>
            <a href="https://babbugames.ccbp.tech/"
              ><i className="fa-solid fa-arrow-up-right-from-square"></i
            ></a>
          </div>
        </div>

        <div className="project-card">
          <img
            src="../assets/images/upload/TaskManaging_App.jpg"
            alt="project4"
            className="project-image"
          />
          <div className="project-content">
            <h4>Task Managing App</h4>
            <p>
              Task Managing App was created using ReactJS which allows user to
              manage their tasks.
            </p>
            <a href="https://taskmanaging.ccbp.tech/"
              ><i className="fa-solid fa-arrow-up-right-from-square"></i
            ></a>
          </div>
        </div>

        <div className="project-card">
          <img
            src="../assets/images/upload/Job_App.jpg"
            alt="project6"
            className="project-image"
          />
          <div className="project-content">
            <h4>Jobby App</h4>
            <p>
              Jobby was developed using ReactJS. Jobby app is a job searching
              platform. Username: rahul, Password: rahul@2021
            </p>
            <a href="https://babbucreations.ccbp.tech/login"
              ><i className="fa-solid fa-arrow-up-right-from-square"></i
            ></a>
          </div>
        </div>

        <div className="project-card">
          <img
            src="../assets/images/upload/Food_Much.jpg"
            alt="project7"
            className="project-image"
          />
          <div className="project-content">
            <h4>Food Much</h4>
            <p>
              Food Much was built using HTML, CSS, Flex-box. Food Much is a
              Responsive Food Delivery App.
            </p>
            <a href="https://foodhubmunch.ccbp.tech/"
              ><i className="fa-solid fa-arrow-up-right-from-square"></i
            ></a>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Projects