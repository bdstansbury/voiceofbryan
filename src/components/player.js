import React from "react"
import AudioPlayer from 'react-h5-audio-player';
import '../styles/styles.css';


export default function Player(props, { children }) {
  return (  
    <div style={{ margin: '0rem', padding: `.5rem` }}>
      <h6 style={{  letterSpacing: '0.2em', marginBottom: '0.1rem'}}>{props.playerTitle}</h6>
      <AudioPlayer
       autoPlay={ false }
       src={props.playerSrc}
       layout="horizontal-reverse"
       onPlay={e => console.log("onPlay")}
       showJumpControls={ false }
       showDownloadProgress={ false }

       // other props here
  />
      {children}
    </div>
  )
}

