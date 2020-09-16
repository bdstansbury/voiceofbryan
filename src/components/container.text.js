import React from "react"


export default function Text(props, { children }) {
  return (
    <div class= "transparent" style={{ margin: '0.5rem', maxWidth: 400, minWidth: 300, padding: `1rem` }}>
      <h4 style={{  letterSpacing: '0.4em' }}>{props.textHeading}</h4>
      <p>{props.textContent}</p>
      {children}
    </div>
  )
}