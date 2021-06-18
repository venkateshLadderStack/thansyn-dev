import React from "react"
const TopHeading=({title})=>{
    return(
        <div class="col-lg-12">
            <div class="area-title text-center">
              <h2 dangerouslySetInnerHTML={{__html:title}}/>
            </div>
          </div>
    )
}

export default TopHeading