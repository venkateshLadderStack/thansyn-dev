import React from "react"
import Analyst from "../components/Analyst"
import Layout from "../components/layout"
import ConnectUs from "../components/ConnectUs"
import PostItem from "../components/PostItem"
import AboutsFuture from "../components/AboutsFuture"
import AnalystContent from "../components/AnalystContent"
import Post1 from "../components/assets/img/w-1.jpg"
import Post2 from "../components/assets/img/w-2.jpg"
import Post3 from "../components/assets/img/w-3.jpg"
import AnalystImg from "../components/assets/img/anylise.png"
const AnalystDetail = () => {
  const futureData =[
    {
      title:"Who we are",
      description:`<p>16,000+ private client advisory conversations<br />
      900+ publications<br />
      1500+ Twitter followers<br />
      2000+ LinkedIn followers<br />
      Hundreds of quotes in business and trade press,<br /> including the New York Times, Financial Times, and<br /> Wall Street Journal<br />
      Formerly Gartner lead analyst for Google, Adobe, IBM <br>Software, and other firms<br />
      Renaissance man with strong social, technical, and<br /> leadership skills</p>`
    },
    {
      title:"Background",
      description:`<h6>Gartner, Inc.</h6><p>Twenty-four exciting years as a major thought leader<br> at Gartner, Inc. Two years as global head of Gartner <br> research</p>
      <p>Continuously reinventing myself and my thinking to<br> deliver provocative insights to thousands of clients<br> worldwide while stimulating several hundreds of<br> people inside Gartner to improve their game.</p>
      <h6>Academic</h6>
      <p>Brain sciences (biological constraints on learning) were<br>my early passion, a background that equipped me <br>with the skills I needed to master the world of IT as <br> well as much of the new world of AI</p>`
    },
    {
      title:"Perspective",
      description:`<p>All of the breakthrough technologies of this century <br>
      will be interwoven through our social, governmental,<br>
      and economic lives. We are no longer dealing with<br>
      narrowly applied technology. Everything we cover will<br>
      be essential for the proper functioning of society and<br>life. Welcome to the fourth industrial revolution.<br> Hype is necessary or evil, depending on who’s doing <br>it.</p>`
    }
  ]
  const postData = [
    {
      tags: "AUTOMATION",
      image: Post1,
      date: "24 November, 2020",
      time: "2 Mins",
      heading: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
      readBtn: "READ INSIGHT",
    },
    {
      tags: "SOCIETY",
      image: Post2,
      date: "24 November, 2020",
      time: "2 Mins",
      heading: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
      readBtn: "READ INSIGHT",
    },
    {
      tags: "FUTURE OF WORK",
      image: Post3,
      date: "24 November, 2020",
      time: "2 Mins",
      heading: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
      readBtn: "READ INSIGHT",
    },
  ]
  return (
    <Layout>
      <div class="analyst-detail pt_45 overflow-hidden">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="area-title  site-area-titel d-flex">
                <h2>Tom Austin </h2>
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
              </div>
            </div>
          </div>
          <div class="row mas-grid-wrapper">
            <div class="col-lg-6 col-md-12 grid-item" data-aos="fade-up">
              <div class="analust-item-img mt-0 mb-4">
                <img src={AnalystImg} alt="" />
              </div>
            </div>
            <div
              class="col-lg-6 col-md-12 mb-lg-4 mb-4 grid-item"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div class="analu-wrapp mt-0 mb-4">
                <AnalystContent 
                aboutAnalyst="<p>Tom spent 24 exciting years as major thought leader <br /> at Gartner, Inc. 2 years as global head of Gartner research.</p><p>16k+ advisory conversations, 900+ publications</p>"
                insightTitle="Wrote insights on"
                insightText="<p>Artificial Intelligence<br />Business value of technology<br />Regulation & public policy</p>"
                serviceTitle="Services"
                serviceText="<p>Speaking engagements, Workshops, Podcasts<br>Webinars & Fireside Chats</p>"
                />
              </div>
            </div>
            {futureData.map((item,index)=>(
            <div
              class="col-lg-6 col-md-12 grid-item"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <AboutsFuture title={item.title} description={item.description}/>
            </div>))
}
          </div>
        </div>
      </div>
      <div class="what-new-area overflow-hidden">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="area-title">
                <h2>Insights by this author</h2>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            {postData.map((item, index) => (
              <div
                class="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <PostItem
                  tags={item.tags}
                  image={item.image}
                  date={item.date}
                  time={item.time}
                  heading={item.heading}
                  description={item.description}
                  readBtn={item.readBtn}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <ConnectUs heading="Connect with an analyst." />
    </Layout>
  )
}
export default AnalystDetail
