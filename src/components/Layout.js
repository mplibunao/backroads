import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "./layout.css"

export default ({ children }) => (
  <main>
    <Navbar />
    {children}
    <Footer />
  </main>
)
