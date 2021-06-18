import React from "react"
const CommunityBox = ({title,subTitle,image}) => {
  return (
    <div class="community-box">
      <h3>{title}</h3>
      <a href="">
        {" "}
        <h4 dangerouslySetInnerHTML={{ __html: subTitle }} />
      </a>
      <img class="mask" src={image} alt="" />
    </div>
  )
}

export default CommunityBox
