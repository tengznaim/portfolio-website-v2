import React from "react"
import "../styles/global.css"
import Socials from "./Socials"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Meta from "./SEO"

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <main className="main-container">
        <Navbar></Navbar>
        <Socials></Socials>
        {children}
        <Footer></Footer>
      </main>
    </>
  )
}
