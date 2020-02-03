import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import './layout.css'

export default ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
)
