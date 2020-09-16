import React from "react"
import Layout from "../components/layout"
import Title from "../components/title"
import Banner from "../images/BooksWaterBanner2.png"

export default function IntheBooth() {
  return (
    <Layout>
      <img src={Banner} alt="Books Water Bryan Stansbury Audiobook Narrator" style={{ minwidth: 650 }}/>
      <Title titleText="in the booth with bryan" />
    </Layout>
  )
}