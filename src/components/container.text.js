import React from "react"


export default function Text({ children }) {
  return (
    <div class= "transparent" style={{ margin: '1rem', maxWidth: 650, minWidth: 400, padding: `1rem` }}>
      <h4 style={{  letterSpacing: '0.4em' }}> meet bryan </h4>
      <p> Nominated for an Independent Audiobook Award for his second title, <strong>Bryan</strong> took to narrating as naturally as a sloth takes to sleeping; though not quite as adorably. As an improv and character actor he understands the importance of motivation, inflection, emphasis, and pacing. Bryan’s <strong>lively</strong> character performances, <strong>immersive</strong> narration, and <b>astute</b> comedic timing exemplify a narrator who thoroughly enjoys the art of storytelling. Capable of a range of accents and dialects, he truly is a man of many hats.</p>
      {children}
    </div>
  )
}