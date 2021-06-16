import React from "react"
import Analyst from "../components/Analyst"
import Layout from "../components/layout"
import Analyst1 from "../components/assets/img/analysts listing/1.png"
import Analyst2 from "../components/assets/img/analysts listing/2.png"
import Analyst3 from "../components/assets/img/analysts listing/3.png"
import Analyst4 from "../components/assets/img/analysts listing/4.png"
import Analyst5 from "../components/assets/img/analysts listing/5.png"
import Analyst6 from "../components/assets/img/analysts listing/6.png"
import Analyst7 from "../components/assets/img/analysts listing/7.png"
import Analyst8 from "../components/assets/img/analysts listing/8.png"
import Analyst9 from "../components/assets/img/analysts listing/9.png"
import Analyst10 from "../components/assets/img/analysts listing/10.png"
import ConnectUs from "../components/ConnectUs"
const AnalystListing = () => {
  const topImage = [Analyst2, Analyst3, Analyst4, Analyst5]
  const listImage = [Analyst6, Analyst7, Analyst8, Analyst9, Analyst10]
  return (
    <Layout>
      <div class="analyst-listing pt_45 overflow-hidden">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="area-title  text-center ">
                <h2>Analysts</h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-6 col-lg-12 col-md-12">
              <div class="row mas-grid-wrapper">
                {topImage.map((item, index) => (
                  <div
                    class="col-lg-12 col-md-12"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <Analyst image={item} />
                  </div>
                ))}
              </div>
            </div>
            <div
              class="col-xl-6 col-lg-12 col-md-12 mb-lg-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div class="analu-wrapp">
                <img src={Analyst1} alt="" />
                <div class="analust-content">
                  <h2>Jessica Bloom</h2>
                  <ul class="social-list d-flex">
                    <li>
                      <a href="#">
                        <i class="fab fa-facebook-f facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-instagram instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-twitter twitter"></i>
                      </a>
                    </li>
                  </ul>
                  <p>
                    Tom spent 24 exciting years as major thought leader <br />{" "}
                    at Gartner, Inc. 2 years as global head of Gartner research.
                  </p>
                  <p>16k+ advisory conversations, 900+ publications</p>
                  <h4>Wrote insights on</h4>
                  <p>
                    Artificial Intelligence
                    <br />
                    Business value of technology
                    <br />
                    Regulation & public policy
                  </p>
                  <h4>Services</h4>
                  <p>
                    Speaking engagements, Workshops, Podcasts
                    <br />
                    Webinars & Fireside Chats
                  </p>
                  <div class="anylust-btn d-flex align-items-center justify-content-between mt_55">
                    <a href="#" class="btn bg-succes btn-group-lg radius-0">
                      CONNECT
                    </a>
                    <a href="" class="btn-line">
                      VIEW PROFILE
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {listImage.map((item, index) => (
              <div
                class="col-xl-6 col-lg-12 col-md-12"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Analyst image={item} name="Jessica Bloom" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <ConnectUs heading="Connect with an analyst."/>
    </Layout>
  )
}
export default AnalystListing
