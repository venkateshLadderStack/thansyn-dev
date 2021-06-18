import React from "react"
import AboutCard from "../components/AboutCard"
import AboutFuture from "../components/AboutFuture"
import Layout from "../components/layout"
import image1 from "../components/assets/img/about/1.png"
import image2 from "../components/assets/img/about/2.png"
import ConnectUs from "../components/ConnectUs"
const AboutUs = () => {
    const aboutData=[
        {
            heading:"Leadership",
            description:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled."
        },
        {
            heading:"Leadership",
            description:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled."
        }
    ]
    const aboutFuture=[
        {
            heading:"Leadership",
            description:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled.",
            image:image1,
            founder:"Founder 1",
            contactHeading:"Contacts",
            contactNo:"+92 312 7524",
            email:"Info@company.com"
        },
        {
            heading:"Leadership",
            description:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled.",
            image:image2,
            founder:"Founder 1",
            contactHeading:"Contacts",
            contactNo:"+92 312 7524",
            email:"Info@company.com"
        }
    ]
  return (
    <Layout>
      <div class="about-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="area-title text-center">
                <h2>
                  About <br />
                  the company
                </h2>
              </div>
            </div>
          </div>
          <div class="row">
            <AboutCard data={aboutData}/>
            <AboutFuture data={aboutFuture}/>
          </div>
        </div>
      </div>
      <ConnectUs />
    </Layout>
  )
}
export default AboutUs