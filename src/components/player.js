import React from "react"
import GreenAudioPlayer from "gree-audio-player"


export default function Player(props, { children }) {
  return (
    <div style={{ margin: '0.5rem', width: 250, height: 20, padding: `1rem` }}>
      <link rel="stylesheet" type="text/css" href="{path}/dist/css/green-audio-player.min.css"></link>
      <div class="ready-player-1 player-with-accessibility">
      <h5 style={{  letterSpacing: '0.4em' }}>{props.playerTitle}</h5>
        <audio crossorigin>
            <source src="https://soundcloud.com/bryan-stansbury/fiction-male-storyteller-american-southern" type="audio/mpeg" />
        </audio>
    </div>
    <script src="../dist/js/green-audio-player.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            GreenAudioPlayer.init({
                selector: '.player-with-accessibility',
                stopOthersOnPlay: true,
                enableKeystrokes: true
            })
});
    </script>
      {children}
    </div>
  )
}