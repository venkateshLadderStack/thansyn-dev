import React from "react"

const AboutCard = ({ heading, description,data }) => {
  return (
    <>
    {data.map((item,index)=>(
    <div
      class="col-lg-6 col-md-6"
      data-aos="fade-right"
      data-aos-duration="900"
    >
      <div class="card-item">
        <div class="card-content">
          <h4>{item.heading}</h4>
          <p>{item.description}</p>
        </div>
      </div>
    </div>))
}
    </>
  )
}

export default AboutCard