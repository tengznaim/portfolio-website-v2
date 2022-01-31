import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/sections/Hero"
import Experience from "../components/sections/Experience"
import Projects from "../components/sections/Projects"

export default function Home() {
  return (
    <Layout>
      <Hero></Hero>
      <Experience></Experience>
      <Projects></Projects>
    </Layout>
  )
}
