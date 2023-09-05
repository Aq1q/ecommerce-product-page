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
  const [amount, setAmount] = useState(0);

  const addToCart = (arg) => {
    setAmount(amount + arg);
  }
  const removeFromCart = () => {
    if(amount != 0) {
      setAmount(0);
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
