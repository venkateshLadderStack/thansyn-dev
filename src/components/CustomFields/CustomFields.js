import { useField, Field } from "formik"
import React from "react"

export const CustomField = ({ className, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <>
      <input {...field} {...props} className={className} />
      {meta.touched && meta.error ? (
        <p style={{ fontWeight: "lighter", fontSize: "12px" }}>
          {meta.error.toUpperCase()}
        </p>
      ) : null}
    </>
  )
}

export const CustomCheckBox = props => {
  const { name, type, id, ...rest } = props
  const [field, meta] = useField(props)

  return (
    <>
      <input {...field} {...props} id={id} />
      {meta.touched && meta.error ? (
        <p style={{ fontWeight: "lighter", fontSize: "12px" }}>
          {meta.error.toUpperCase()}
        </p>
      ) : null}
    </>
  )
}

export const CustomSelect = props => {
  const { name, options, className, ...rest } = props
  const [field, meta] = useField(props)

  return (
    <select className={className} {...field} {...rest}>
      {options.map((option, idx) => (
        <option key={idx} data-display={option.value} value={option.value}>
          {option.key}
        </option>
      ))}
    </select>
  )
}

export const CustomTextArea = ({ ...props }) => {
  const [field, meta] = useField(props)

  return (
    <>
      <textarea {...field} {...props} />
      {meta.touched && meta.error ? (
        <p style={{ fontWeight: "lighter", fontSize: "12px" }}>
          {meta.error.toUpperCase()}
        </p>
      ) : null}
    </>
  )
}
