import React, { useEffect } from "react"
import "../styles/global.css"
import Socials from "./Socials"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Meta from "./SEO"
import AOS from "aos"
import "aos/dist/aos.css"

export default function Layout({ children }) {
  // Initialise AOS
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
    })
    AOS.refresh()
  }, [])

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
