import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import AddCard from "./pages/AddCard"

function App() {
  const [cards, setCards] = useState([])

  const addCard = (newCard) => {
    const newId = Date.now()
    setCards((prevCards) => [
      ...prevCards,
      { ...newCard, id: newId }
    ])
  }

  const deleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id))
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home cards={cards} deleteCard={deleteCard} />} />
        <Route path="/addcard" element={<AddCard addCard={addCard} />} />
      </Routes>
    </Router>
  )
}

export default App
