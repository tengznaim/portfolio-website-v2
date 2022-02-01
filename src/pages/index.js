import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/sections/Hero"
import Experience from "../components/sections/Experience"
import Projects from "../components/sections/Projects"
import Skills from "../components/sections/Skills"
import Contact from "../components/sections/Contact"

export default function Home() {
  return (
    <Layout>
      <Hero></Hero>
      <Experience></Experience>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
    </Layout>
  )
}
