import * as React from "react"
import Layout from "../components/layout"
import heroSliderImg from "../components/assets/img/img-1.jpg"
import HeroSlider from "../components/slider/HeroSlider"
import PostItem from "../components/PostItem"
import Post1 from "../components/assets/img/w-1.jpg"
import Post2 from "../components/assets/img/w-2.jpg"
import Post3 from "../components/assets/img/w-3.jpg"
import MaskImg1 from "../components/assets/img/mask-1.png"
import MaskImg2 from "../components/assets/img/mask-2.png"
import MaskImg3 from "../components/assets/img/mask-3.png"
import CloseImg from "../components/assets/img/close.svg"
import TopHeading from "../components/TopHeading"
import CommunityBox from "../components/CommunityBox"
const IndexPage = () => {
  const heroSliderData = [
    {
      title:
        "<span>Engage the world’s</span> <br> <span>leading analysts</span>",
      description: `We’re an open platform for world’s leading analysts <br>
      & business leaders shaping the future`,
      serviceBtn: "View services",
      researchBtn: "Our research",
      image: heroSliderImg,
    },
    {
      title:
        "<span>Engage the world’s</span> <br> <span>leading analysts</span>",
      description: `We’re an open platform for world’s leading analysts <br>
      & business leaders shaping the future`,
      serviceBtn: "View services",
      researchBtn: "Our research",
      image: heroSliderImg,
    },
    {
      title:
        "<span>Engage the world’s</span> <br> <span>leading analysts</span>",
      description: `We’re an open platform for world’s leading analysts <br>
      & business leaders shaping the future`,
      serviceBtn: "View services",
      researchBtn: "Our research",
      image: heroSliderImg,
    },
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




  const communityData = [
    {
      title:"NETWORK",
      subTitle:`Connect & Network with <br>
      our community of thought <br>
      leader`,
      image:MaskImg1
    },
    {
      title:"CONSULT",
      subTitle:`Consult & have expert <br>
      interventions to solve <br>
      problems`,
      image:MaskImg2
    },
    {
      title:"FOLLOW",
      subTitle:`Receive insights, knowledge <br>
      & gain access to expert<br>
      analysts`,
      image:MaskImg3
    }
  ]
  const upcomingEventData=[
    {
      tags: "AUTOMATION",
      image: Post1,
      date: "24 November, 2020",
      time: "2 Mins",
      registerDate:"9th JUN",
      registerText:"FUTURE OF AI",
      registerBtn:"REGISTER"
    },
    {
      tags: "AUTOMATION",
      image: Post1,
      date: "24 November, 2020",
      time: "2 Mins",
      registerDate:"9th JUN",
      registerText:"FUTURE OF AI",
      registerBtn:"REGISTER"
    },
    {
      tags: "AUTOMATION",
      image: Post1,
      date: "24 November, 2020",
      time: "2 Mins",
      registerDate:"9th JUN",
      registerText:"FUTURE OF AI",
      registerBtn:"REGISTER"
    }
  ]
  return (
    <Layout>
      <div class="home_wrapper postion-relative">
        <div class="hero-area">
      <HeroSlider data={heroSliderData} />
      </div>
      <div class="subscribe_box">
            <img src={CloseImg} class="close_btn" alt="" />
            <p>Get insights from leading analysts</p>
            <form action="#">
                <input type="email" placeholder="email address" />
                <button type="submit" class="blue_btn">Subscribe [Free]</button>
                <a href="#">Privacy Policy</a>
            </form>
        </div>
      </div>
      <div class="community-area">
        <div class="container">
            <div class="row">
              <TopHeading title="Engage with our community"/>
            </div>
            <div class="row">
              {communityData.map((item,index)=>(
                <div class="col-lg-4 col-md-4 mt_50" data-aos="fade-up" data-aos-delay="200">

                  <CommunityBox 
                  title={item.title}
                  subTitle={item.subTitle}
                  image={item.image}/>
                </div>))
}
                </div>

            </div>

            </div>
      <div class="what-new-area">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div class="area-title">
                <h2>What’s new</h2>
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
      <div class="event-area">
        <div class="container">
            <div class="row">
              <TopHeading title="Upcoming events"/>
            </div>
            <div class="row justify-content-center">
              {upcomingEventData.map((item,index)=>(
                <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                  <PostItem eventInfo tags={item.tags}
                  image={item.image}
                  date={item.date}
                  time={item.time}
                  registerDate={item.registerDate}
                  registerText={item.registerText}
                  registerBtn={item.registerBtn}
                  />
                </div>))
}
                </div>
            </div>
            </div>
    </Layout>
  )
}

export default IndexPage
