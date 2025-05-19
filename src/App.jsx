import './App.css'
import Footer from './component/Footer'
import React from 'react'
import Nav from './component/Nav'
import About from './component/About'
import CardList from './component/CardList'
function App() {

  return (
    <>
      <Nav />
      <CardList />
      <About />
      <Footer />
    </>
  )
}

export default App
