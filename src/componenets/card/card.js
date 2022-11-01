import React from 'react'
import "./card.css"

const card = ({emoji, heading, detail}) => {
  return (
    <div className="card">
        <div className="content">
            <img src={emoji} alt="" />
            <span>{heading}</span>
            <span>{detail}</span>
        </div>
    </div>
  )
}

export default card