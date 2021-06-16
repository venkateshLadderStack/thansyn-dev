import React from "react"
const WidgetBox = (props) => {
  return (
    <>
      <h4>{props.title}</h4>
      <ul>
        {props.items.map((item, index) => (
          <li>
            <a href={item.path}>{item.label}</a>
          </li>
        ))}
      </ul>
    </>
  )
}
export default WidgetBox