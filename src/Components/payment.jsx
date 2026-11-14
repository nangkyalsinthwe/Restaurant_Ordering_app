import { useState } from 'react'

function Payment({ handlePayment }) {
  const [formData, setFormData] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    handlePayment(formData)
  }

  return (
    <div className="payment">
      <h2>Enter Card Details</h2>
      <form id='consent-form' onSubmit={handleSubmit}>
        <label htmlFor='name'>
          <input
            type='text'
            id='name'
            placeholder='Enter Your name'
            onChange={(e) => setFormData(e.target.value)}
            aria-label="Enter your full name" required />
        </label>
        <label htmlFor='card'>
          <input
            type='number'
            id='card'
            placeholder='Enter Your card number'
            aria-label='Enter Your card Number' required />
        </label>
        <label htmlFor='cvv'>
          <input type='number' id='cvv' placeholder='Enter CVV' aria-label='Enter CVV' required />
        </label>
        <button type='submit' className="pay-btn">Pay</button>
      </form>
    </div >
  )
}

export default Payment