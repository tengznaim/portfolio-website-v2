import React from "react"
import "../styles/global.css"
import Socials from "./Socials"

export default function Layout({ children }) {
  return (
    <main className="main-container">
      <Socials></Socials>
      {children}
    </main>
  )
}
