import React from "react"
import Player from "../components/player"


export default function Media(props, { children }) {
  return (
    <div class= "transparent" style={{ overflow: 'auto', height: 374, maxWidth: 550, padding: `1rem` }}>
      <h4 style={{  letterSpacing: '0.4em' }}>{props.mediaHeading}</h4>
      <Player playerTitle="Fiction, American Southern, Storyteller" playerSrc="../audio/BStansbury-F-M-Am-Southern.mp3" />
      <Player playerTitle="Fiction, BBC British, Dialog" playerSrc="../audio/BStansbury-F-M-Dialog-BBC-Brit.mp3" />
      <Player playerTitle="Fiction, American General, M/F Dialog" playerSrc="../audio/BStansbury-F-MF-Dialog-Am-Gen.mp3" />

      {children}
    </div>
  )
}