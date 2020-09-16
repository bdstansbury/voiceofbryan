import React from "react"

export default function Player(props, { children }) {
  return (
    <div style={{ margin: '0.5rem', width: 250, padding: `1rem` }}>
      <h6 style={{  letterSpacing: '0.4em' }}>{props.playerTitle}</h6>
      <audio controls preload="metadata" style=" width:200px;">
	<source src="https://soundcloud.com/bryan-stansbury/fiction-male-storyteller-american-southern" type="audio/mpeg" />
	Your browser does not support the audio element.
     </audio>
      {children}
    </div>
  )
}