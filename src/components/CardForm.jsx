import React, { useState } from "react"

function CardForm({ cardData, setCardData, onSubmit }) {
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    let newErrors = {}
    const currentYear = new Date().getFullYear()
    const currentMonth = new Date().getMonth() + 1
  
    if (!/^\d{16}$/.test(cardData.cardNumber)) {
      newErrors.cardNumber = "Card number must be exactly 16 digits, numbers only."
    }
  
    if (!/^[A-Za-z\s]+$/.test(cardData.cardholder)) {
      newErrors.cardholder = "Cardholder name cannot contain numbers."
    }
  
    if (!/^\d{1,2}$/.test(cardData.expireMonth) || parseInt(cardData.expireMonth) < 1 || parseInt(cardData.expireMonth) > 12) {
      newErrors.expireMonth = "Please enter a valid month (01-12)."
    }
  
    if (!/^\d{4}$/.test(cardData.expireYear)) {
      newErrors.expireYear = "Please enter a valid year (4 digits)."
    } else if (parseInt(cardData.expireYear) < currentYear) {
      newErrors.expireYear = "The expiration year cannot be in the past."
    } else if (parseInt(cardData.expireYear) === currentYear && parseInt(cardData.expireMonth) < currentMonth) {
      newErrors.expireMonth = "The expiration date cannot be in the past."
    }
  
    if (!/^\d{3}$/.test(cardData.ccv)) {
      newErrors.ccv = "CCV must be exactly 3 digits."
    }
  
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validateForm()
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
    } else {
      setErrors({})
      onSubmit(cardData)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card-form">
      <label>
        Card Issuer:
        <select value={cardData.issuer} onChange={(e) => setCardData({ ...cardData, issuer: e.target.value })}>
          <option value="Visa">Visa</option>
          <option value="Mastercard">Mastercard</option>
          <option value="American Express">American Express</option>
        </select>
      </label>

      <label>
        Card Number:
        <input
          type="text"
          value={cardData.cardNumber}
          maxLength="16"
          onChange={(e) => {
            if (/^\d*$/.test(e.target.value) && e.target.value.length <= 16) {
              setCardData({ ...cardData, cardNumber: e.target.value })
            }
          }}
        />
        {errors.cardNumber && <p style={{ color: "red" }}>{errors.cardNumber}</p>}
      </label>

      <label>
        Cardholder Name:
        <input
          type="text"
          value={cardData.cardholder}
          onChange={(e) => {
            if (/^[A-Za-z\s]*$/.test(e.target.value)) {
              setCardData({ ...cardData, cardholder: e.target.value })
            }
          }}
        />
        {errors.cardholder && <p style={{ color: "red" }}>{errors.cardholder}</p>}
      </label>

      <label>
        Expiry Month:
        <input
          type="text"
          value={cardData.expireMonth}
          maxLength="2"
          onChange={(e) => {
            if (/^\d{0,2}$/.test(e.target.value)) {
              setCardData({ ...cardData, expireMonth: e.target.value })
            }
          }}
        />
        {errors.expireMonth && <p style={{ color: "red" }}>{errors.expireMonth}</p>}
      </label>

      <label>
        Expiry Year:
        <input
          type="text"
          value={cardData.expireYear}
          maxLength="4"
          onChange={(e) => {
            if (/^\d{0,4}$/.test(e.target.value)) {
              setCardData({ ...cardData, expireYear: e.target.value })
            }
          }}
        />
        {errors.expireYear && <p style={{ color: "red" }}>{errors.expireYear}</p>}
      </label>

      <label>
        CCV:
        <input
          type="text"
          value={cardData.ccv}
          maxLength="3"
          onChange={(e) => {
            if (/^\d{0,3}$/.test(e.target.value)) {
              setCardData({ ...cardData, ccv: e.target.value })
            }
          }}
        />
        {errors.ccv && <p style={{ color: "red" }}>{errors.ccv}</p>}
      </label>

      <button type="submit">Add Card</button>
    </form>
  )
}

export default CardForm
