import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div>
        <section className="service" id="services">
      <h2 className="heading">My<span> Services</span></h2>
      <div className="services-container">
        <div className="service-card slideup">
          <i className="fa-solid fa-code"></i>
          <h3>Web Development</h3>
          <p>
            As a web developer, I create dynamic and functional websites using a
            combination of front-end and back-end technologies. I specialize in
            building responsive, user-friendly interfaces that enhance the user
            experience. Whether it’s an e-commerce site, a blog, or a custom web
            application, I bring ideas to life through code.
          </p>
        </div>

        <div className="service-card slideup">
          <i className="fa-solid fa-code"></i>
          <h3>UI Development</h3>
          <p>
            UI (User Interface) development focuses on creating the visual
            elements of a website or application. I specialize in turning design
            mockups into interactive interfaces using HTML, CSS, and JavaScript.
            My goal is to ensure that users have a seamless and enjoyable
            experience while interacting with your product.
          </p>
        </div>

        <div className="service-card slideup">
          <i className="fa-solid fa-palette"></i>
          <h3>UI Designing</h3>
          <p slideup>
            UI design is all about aesthetics and usability. As a UI designer, I
            craft visually appealing layouts, choose color schemes, and create
            intuitive navigation. I pay attention to details like typography,
            spacing, and consistency. My designs aim to enhance the overall look
            and feel of your digital product.
          </p>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Services