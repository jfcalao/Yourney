import React from 'react'
import './style.css'
const Section = (props) => {
  const {title, text, backgroundColor, color} = props
  return (
    <div
      className="container-section"
      style={{backgroundColor: backgroundColor}}
    >
      <h1 style={{color: color}}>{title}</h1>
      {text ? <p style={{color: color}}>{text}</p> : ''}
    </div>
  )
}

export default Section
