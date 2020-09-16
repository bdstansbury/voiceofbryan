import React from "react"
import Player from "../components/player"


export default function Media(props, { children }) {
  return (
    <div class= "transparent" style={{ margin: '0.5rem', maxWidth: 400, minWidth: 300, padding: `1rem` }}>
      <h4 style={{  letterSpacing: '0.4em' }}>{props.mediaHeading}</h4>
      <Player playerTitle="Fiction, American Southern, Storyteller" />
      
      {children}
    </div>
  )
}