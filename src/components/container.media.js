import React from "react"


export default function Sample({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, minWidth: 400, padding: `0 1rem` }}>
      <h5> hear bryan </h5>
      <p> Nominated for an Independent Audiobook Award for his second title, Bryan took to narrating as naturally as a sloth takes to sleeping; though not quite as adorably. As an improv and character actor he understands the importance of motivation, inflection, emphasis, and pacing. Bryan’s lively character performances, immersive narration, and astute comedic timing exemplify a narrator who thoroughly enjoys the art of storytelling. Capable of a range of accents and dialects, he truly is a man of many hats.</p>
      {children}
    </div>
  )
}