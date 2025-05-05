import React from 'react'
import './Certificates.css'

const Certificates = () => {
  return (
    <div>
         <section className="certificates-container" id="certificates">
      <h2 className="heading">My<span> Certificates</span></h2>
      <div className="certificates-card slideup">
        <img
          src="../res.cloudinary.com/dffu1ungl/image/upload/v1709476852/LRXZBEKQJE_page-0001_ezcz9r.jpg"
          alt="static"
        />
        <img
          src="../res.cloudinary.com/dffu1ungl/image/upload/v1709476846/VLYSMIQRJI_page-0001_te68ib.jpg"
          alt="responsive"
        />
        <img
          src="../res.cloudinary.com/dffu1ungl/image/upload/v1709476831/JavaScript_page-0001_alduug.jpg"
          alt="dynamic"
        />
       
       
      </div>
    </section>
    </div>
  )
}

export default Certificates