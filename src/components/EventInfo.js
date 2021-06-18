import React from "react"
const EventInfo=({title,subTitle,date,time,duration,speaker,audience})=>{
    return(
        <div class="event-webiner">
             <h4 dangerouslySetInnerHTML={{__html:title}}/>
             <p class="sup-titel">{subTitle}</p>
             <div class="event-web-data">
               <p>{date}</p>
               <p dangerouslySetInnerHTML={{__html:time}}/>
               <p>{duration}</p>
               <p>{speaker}</p>
               <p>{audience}</p>
             </div>
           </div>
    )
}

export default EventInfo