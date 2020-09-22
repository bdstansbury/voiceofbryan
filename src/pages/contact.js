import React from "react"
import Layout from "../components/layout"
import Title from "../components/title"
import Banner from "../images/BooksWaterBanner2.png"

export default function Contact() {
  return (
    <Layout>
      <img src={Banner} alt="Books Water Bryan Stansbury Audiobook Narrator" style={{ minwidth: 650 }}/>
      <Title titleText="talk to bryan" />
      <p>
        <a href="mailto:bstansburyvoice@gmail.com">bstansburyvoice@gmail.com</a>
      </p>
    </Layout>
  )
}