import React from 'react'

const FloatingSubscribeBox = () => {
    return(
        <div className="subscribe_box">
          <img src={CloseImg} className="close_btn" alt="" />
          <p>Get insights from leading analysts</p>
          <form action="#">
            <input type="email" placeholder="email address" />
            <button type="submit" className="blue_btn">
              Subscribe [Free]
            </button>
            <a href="#">Privacy Policy</a>
          </form>
        </div>
    )
}

export default FloatingSubscribeBox