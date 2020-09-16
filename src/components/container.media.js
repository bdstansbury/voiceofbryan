import React from "react"
import Player from "../components/player"


export default function Media(props, { children }) {
  return (
    <div class= "transparent" style={{ margin: '0.5rem', maxWidth: 450, minWidth: 400, padding: `1rem` }}>
      <h4 style={{  letterSpacing: '0.4em' }}>{props.mediaHeading}</h4>
      <Player playerTitle="Fiction, American Southern, Storyteller" />
      <Player playerTitle="Fiction, BBC British, Male Dialog" />
      <Player playerTitle="Fiction, American General, M/F Dialog" />

      {children}
    </div>
  )
}