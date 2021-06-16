import React from "react"

const Analyst=({image,name})=>{
    return(
        <div class="card-images-box mb-4">
            <img src={image} alt="" />
             <div class="shap"></div>
            <div class="card-body-content">
              <h4>{name}</h4>
            </div>
          </div>
    )
}
export default Analyst