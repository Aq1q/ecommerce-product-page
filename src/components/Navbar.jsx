import { useContext, useState } from 'react';
import { CartContext } from '../App';
import Logo from '../assets/logo.svg';
import Avatar from '../assets/image-avatar.png';
import CartIcon  from '../assets/icon-cart.svg';
import ShoeImage from '../assets/image-product-1-thumbnail.jpg';
import Bin from '../assets/icon-delete.svg'
import '../styles/Navbar.scss';


export const Navbar = () => {
    const [cartToggle, setCartToggle] = useState(false);
    const { amount, removeFromCart } = useContext(CartContext);
    const handleClick = () => {
        setCartToggle(!cartToggle);
    }
    

    return (
        <div className="navbar">
            <div className='nav-left'>
                <img className='logo' src={Logo} alt="Logo" />
                <ul className='nav-ul'>
                    <li className='nav-item'>Collections</li>
                    <li className='nav-item'>Men</li>
                    <li className='nav-item'>Women</li>
                    <li className='nav-item'>About</li>
                    <li className='nav-item'>Contact</li> 
                </ul>
            </div>
            <div className="nav-right">
                <div className='cart-box'>
                    <img onClick={handleClick} className='cart' src={CartIcon} alt="cart" />
                    {amount > 0 &&
                        <p onClick={handleClick} className='amount'>
                            {amount}
                        </p>
                    }
                    {cartToggle &&
                        <div className='basket'>
                            <div className='basketTitle'>
                                <h2>Cart</h2>
                            </div>
                            {amount > 0 ? 
                            <>
                                <div className='item'>
                                    <img src={ShoeImage} alt="" />
                                    <div className='item-text'>
                                        <p>Fall Limited Edition Sneakers</p>
                                        <p>$125.00 x {amount} <span className='bold-price'>${amount * 125}.00</span></p>
                                    </div>
                                    <img onClick={removeFromCart} className='bin' src={Bin} alt="" />
                                </div>
                                <button className='checkout-btn'>Checkout</button>
                            </> : <div className='empty-cart'>Your cart is empty.</div>
                            }
                        </div>
                    }
                </div>
                <img className='avatar' src={Avatar} alt="Avatar" />
            </div>
        </div>
    )
}