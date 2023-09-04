import Logo from '../assets/logo.svg';
import Avatar from '../assets/image-avatar.png';
import CartIcon  from '../assets/icon-cart.svg';
import '../styles/Navbar.scss';
import { useContext } from 'react';
import { CartContext } from '../App';

export const Navbar = () => {
    const { amount } = useContext(CartContext);

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
                <div>
                    <img className='cart' src={CartIcon} alt="cart" />
                    {amount > 0 &&
                        <p className='amount'>
                            {amount}
                        </p>
                    }
                </div>
                <img className='avatar' src={Avatar} alt="Avatar" />
            </div>
        </div>
    )
}