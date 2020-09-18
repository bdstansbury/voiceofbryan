import React from "react"
import mediaelement

export default function Player(props, { children }) {
  return (  
    <div style={{ margin: '0rem', padding: `0rem` }}>
      <h6 style={{  letterSpacing: '0.2em' }}>{props.playerTitle}</h6>
      <audio class= "transparentFull" controls style={{ width: '100%', border: "none" }}>
	      <source src={props.playerSrc} type="audio/mpeg" />
	Your browser does not support the audio element.
      </audio>
      {children}
    </div>
  )
}