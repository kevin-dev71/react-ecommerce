import { useContext } from 'react'
import { CartContext } from '../../context/cart-context'

import shoppingBag from '../../assets/shopping-bag.png'
import './cart-icon.styles.scss'

const CartIcon = () => {
  const { itemCount, cartItems } = useContext(CartContext)
  return (
    <div className="cart-container">
      <img src={shoppingBag} alt="shopping-cart-icon" />
      {
        itemCount > 0 
        ? <span className="cart-count">{itemCount}</span> 
        : null
      }
      
    </div>
  )
}

export default CartIcon
