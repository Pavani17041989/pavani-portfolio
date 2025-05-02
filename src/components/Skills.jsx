import React from 'react'

// Import all skill images
import skill1 from '../assets/images/upload/Html.png'
import skill2 from '../assets/images/upload/Css.png'
import skill3 from '../assets/images/upload/Bootstrap.png'
import skill4 from '../assets/images/upload/Javascript.png'
import skill5 from '../assets/images/upload/ReactJS.png'
import skill6 from '../assets/images/upload/NodeJS.png'
import skill7 from '../assets/images/upload/ExpressJS.png'
import skill8 from '../assets/images/upload/SQL.png'
import skill9 from '../assets/images/upload/MongoDB.png'
import skill10 from '../assets/images/upload/Python.png'
import skill11 from '../assets/images/upload/Figma.png'

const Skills = () => {
  const skills = [
    { img: skill1, name: 'HTML' },
    { img: skill2, name: 'CSS' },
    { img: skill3, name: 'Bootstrap' },
    { img: skill4, name: 'JavaScript' },
    { img: skill5, name: 'React JS' },
    { img: skill6, name: 'Node JS' },
    { img: skill7, name: 'Express JS' },
    { img: skill8, name: 'SQL' },
    { img: skill9, name: 'MongoDB' },
    { img: skill10, name: 'Python' },
    { img: skill11, name: 'Figma' },
  ]

  return (
    <div>
      <section id="skills" className="skills">
        <h2 className="heading">Technical <span>Skills</span></h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <img src={skill.img} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Skills
