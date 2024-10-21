import React from "react"
import { Link } from "react-router-dom"
import Card from "../components/Card"

function Home({ cards, deleteCard }) {
  return (
    <div className="wrapper">
      <h1>Your Cards</h1>
      <div>
        {cards.length === 0 ? (
          <p>No cards available. Please add a card.</p>
        ) : (
          cards.map((card) => (
            <Card key={card.id} card={card} onDelete={deleteCard} />
          ))
        )}
      </div>
      {cards.length < 4 && (
        <Link to="/addcard">
          <button>Add New Card</button>
        </Link>
      )}
    </div>
  )
}

export default Home
