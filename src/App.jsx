import { useState } from "react"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Card.jsx'
import './App.css'
import { IoMusicalNotes } from "react-icons/io5";

function App() {

  return (
    <>
      <h1>Olá, Mundo</h1>
      <IoMusicalNotes />
      <div className="cards">
        <Card texto="Som de chuva"/>
        <Card texto="Som de vento"/>
        <Card texto="Som de ondas"/>
      </div>
    </>
  )
}

export default App
