import React from "react"
const AboutsFuture=({title,description})=>{
    return(
        <div class="about-future mt-0 mb-4">
              <h4>{title}</h4>
              <p dangerouslySetInnerHTML={{__html:description}}/>
         </div>
    )
}
export default AboutsFuture