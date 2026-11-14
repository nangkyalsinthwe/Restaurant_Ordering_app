import { useState } from 'react'
import MenuArray from '/data.js'
import menuArray from '../../data'
import Payment from './payment'

function Default() {

  const [orderItem, setOrderItem] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [userName, setUserName] = useState("");


  function handlePayment(name) {
    setUserName(name);
    setIsModalOpen(false);
    setOrderItem([]);
    setIsOrderComplete(true);
  }

  function addToCart(id) {
    const targetMenu = MenuArray.filter(menu => menu.id === id)[0]
    setOrderItem([...orderItem, targetMenu])
  }

  function removeFromCart(id) {
    const newOrderItem = orderItem.filter(item => item.id !== id)
    setOrderItem(newOrderItem)
  }

  const menuItems = menuArray.map(menu => {
    return (
      <div className='menu-info' key={menu.id}>
        <div className='menu'>
          <span className='menu-emoji'>{menu.emoji}</span>
          <div className="menu-content">
            <h2>{menu.name}</h2>
            <p id='menu-ingredients'>{menu.ingredients.join(', ')}</p>
            <p>${menu.price}</p>
          </div>
        </div >
        <button onClick={() => addToCart(menu.id)} className='add-btn'>+</button>
      </div>
    )
  })

  return (
    <>
      <div>{menuItems}</div>
      {orderItem.length > 0 && !isOrderComplete && (
        <div className="order-container">
          <h2>Your Order</h2>
          {orderItem.map((item, index) => (
            <div key={index} className="order-item">
              <div className='item-remove'>
                <span>{item.name}</span>
                <button onClick={() => removeFromCart(item.id)} className="remove-btn">Remove</button>
              </div>
              <span>${item.price}</span>
            </div>
          ))}
          <hr />
          <div className="total">
            <span>Total price :</span>
            <span>${orderItem.reduce((total, item) => total + item.price, 0)}</span>
          </div>
          <button onClick={() => setIsModalOpen(true)} className="complete-btn">Complete Order</button>
        </div >
      )}
      {isOrderComplete && (
        <div className="success-msg">
          Thanks, {userName}! Your order is on its way!
        </div>
      )}
      {isModalOpen && <Payment handlePayment={handlePayment} />}
    </>
  )
}

export default Default