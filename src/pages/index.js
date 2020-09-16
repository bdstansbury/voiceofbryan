import React from "react"
import Layout from "../components/layout"
import Text from "../components/container.text"
import Banner from "../images/BooksWaterBanner.png"
import Media from "../components/container.media"

export default function Home() {
  return (
    <Layout>
      <img src={Banner} alt="Books Water Bryan Stansbury Audiobook Narrator" style={{ minwidth: 650 }}/>
      <Text textHeading="meet bryan" textContent="Nominated for an Independent Audiobook Award for his second title, Bryan took to narrating as naturally as a sloth takes to sleeping; though not quite as adorably. As an improv and character actor he understands the importance of motivation, inflection, emphasis, and pacing. Bryan’s lively character performances, immersive narration, and astute comedic timing exemplify a narrator who thoroughly enjoys the art of storytelling. Capable of a range of accents and dialects, he truly is a man of many hats." style={{ float: 'left' }} />
      <Media mediaHeading="listen to bryan" />
    </Layout>
  );
}