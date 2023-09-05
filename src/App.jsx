import { createContext } from 'react'
import { Navbar } from './components/navbar'
import './App.scss'
import { Display } from './components/Display'
import { useState } from 'react'

export const CartContext = createContext({
  amount: 0,
  addToCart: () => {},
  removeFromCart: () => {},
})

function App() {
  const [amount, setAmount] = useState(1);

  const addToCart = () => {
    setAmount(amount + 1);
  }
  const removeFromCart = () => {
    if(amount != 0) {
      setAmount(amount - 1);
    }
  }

  return (
    <CartContext.Provider value={{amount, addToCart, removeFromCart}}>
      <Navbar />
      <Display />
    </CartContext.Provider>
  )
}

export default App
