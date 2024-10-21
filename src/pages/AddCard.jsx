import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import CardForm from "../components/CardForm"

function AddCard({ addCard }) {
  const [cardData, setCardData] = useState({
    issuer: "Visa",
    cardNumber: "",
    cardholder: "",
    expireMonth: "",
    expireYear: "",
    ccv: "",
  })

  const navigate = useNavigate()

  const handleCardSubmit = (newCard) => {
    addCard(newCard)
    navigate("/home")
  }

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
    <div>
      <h1>Add New Card</h1>
      
      
      <div style={{ marginTop: "20px" }}>
        <h2>Card Preview</h2>
        <div style={{ 
          ...getCardStyle(cardData.issuer), 
          padding: "10px", 
          borderRadius: "5px", 
          width: "300px", 
          height: "150px",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start"
        }}>
          <h3 style={{ margin: "0" }}>{cardData.issuer}</h3>
          <p style={{ margin: "0" }}>{cardData.cardNumber.replace(/(.{4})/g, "$1 ") || "**** **** **** ****"}</p>
          <p style={{ margin: "0" }}>Cardholder: {cardData.cardholder || "Your Name"}</p>
          <p style={{ margin: "0" }}>Expires: {cardData.expireMonth}/{cardData.expireYear || "YY"}</p>
        </div>
      </div>
      <CardForm cardData={cardData} setCardData={setCardData} onSubmit={handleCardSubmit} />
    </div>
  )
}

export default AddCard
