import React from "react"
import { Link } from "gatsby"

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 925, minWidth: 550, padding: `0 1rem`  }}>
       <header style={{ marginBottom: `0rem`, marginTop: `-2.5rem`, height: 45, position: 'sticky', top: '0', minWidth: 550, zIndex: '4' }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ letterSpacing: "0.05em", color: 'white', display: `inline`, marginLeft: '.5rem' }}>voiceofbryan.com</h3>
        </Link>
        <ul class="topnav" style={{ float: `right` }}>
          <Link to="/" style={{ marginRight: `0rem` }}>
            <h5 style= {{ color: '#2A8A9D', display: `inline`, padding: '10px' }}>Home</h5>
          </Link>
          <Link to="/credits/" style={{ marginRight: `0rem` }}>
            <h5 style= {{ color: '#2A8A9D', display: `inline`, padding: '10px' }}>Credits</h5>
          </Link>
          <Link to="/contact/" style={{ marginRight: `0rem` }}>
            <h5 style= {{ color: '#2A8A9D', display: `inline`, padding: '10px' }}>Contact</h5>
          </Link>
          <Link to="/inthebooth/" style={{ marginRight: `0rem` }}>
            <h5 style= {{ color: '#2A8A9D', display: `inline`, padding: '10px' }}>In the Booth</h5>
          </Link>
        </ul>
      </header>
      {children}
    </div>
  )
}