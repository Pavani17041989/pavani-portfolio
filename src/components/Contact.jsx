import React from 'react'

const Contact = () => {
  return (
    <div>
        <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me</span></h2>

      <form action="https://api.web3forms.com/submit" method="POST">
        <input
          type="hidden"
          name="access_key"
          value="46bb3fe9-0398-4403-81a9-49503f8b3a60"
        />
        <div className="input-card">
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Mail Id"
            required
          />
        </div>

        <div className="input-card">
          <input
            type="number"
            placeholder="Enter Your Mobile Number"
            required
            name="number"
          />
          <input
            type="text"
            name="subject"
            placeholder="Enter Subject Of The Mail"
            required
          />
        </div>

        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Enter Your Message Here..."
        ></textarea>
        <button type="submit" className="button">Submit</button>
      </form>
    </section>
    </div>
  )
}

export default Contact