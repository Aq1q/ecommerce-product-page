import Logo from '../assets/logo.svg'
import Avatar from '../assets/image-avatar.png'
import CartIcon  from '../assets/icon-cart.svg'

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className='nav-left'>
                <img src={Logo} alt="Logo" />
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
                    <img src={CartIcon} alt="cart" />
                </div>
                <img src={Avatar} alt="Avatar" />
            </div>
        </div>
    )
}