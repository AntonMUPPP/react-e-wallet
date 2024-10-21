import React from "react"

function Card({ card, onDelete }) {
  const getCardStyle = (issuer) => {
    switch (issuer) {
      case "Visa":
        return { backgroundColor: "#4B6FBB", color: "white" }
      case "Mastercard":
        return { backgroundColor: "#EB001B", color: "white" }
      case "American Express":
        return { backgroundColor: "#2C6F8F", color: "white" }
      default:
        return { backgroundColor: "#ccc", color: "black" }
    }
  }

  return (
    <div style={{ 
      ...getCardStyle(card.issuer), 
      padding: "10px", 
      margin: "10px", 
      borderRadius: "5px",
      height: "150px",
      color: "white" 
    }}>
      <h3 style={{ margin: "0" }}>{card.issuer}</h3>
      <p style={{ margin: "0" }}>{card.cardNumber.replace(/(.{4})/g, "$1 ")}</p>
      <p style={{ margin: "0" }}>Cardholder: {card.cardholder}</p>
      <p style={{ margin: "0" }}>Expires: {card.expireMonth}/{card.expireYear}</p>
      <button onClick={() => onDelete(card.id)} style={{ marginTop: "10px" }}>Delete</button>
    </div>
  )
}

export default Card
