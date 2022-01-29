import React from "react"
import "../styles/global.css"
import Socials from "./Socials"
import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <main className="main-container">
      <Navbar></Navbar>
      <Socials></Socials>
      {children}
    </main>
  )
}
