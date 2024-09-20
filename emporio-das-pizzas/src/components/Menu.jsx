import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../css/Menu.css';
import Logo from "../assets/emporio-logo.jpeg";

function Menu({ children }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Fechar o menu se o usuário clicar fora dele ou em um item
    const handleOutsideClick = (e) => {
        if (menuOpen && menuRef.current && !menuRef.current.contains(e.target)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [menuOpen]);

    // Fechar o menu ao clicar em qualquer item do menu
    const handleMenuItemClick = () => {
        setMenuOpen(false);
    };

    return (
        <header className="menu-header">
            <div className="menu-container" ref={menuRef}>
                <div className="menu-logo">
                    <a href="#home" onClick={handleMenuItemClick}>
                        <img src={Logo} alt="imagem" />
                        <h3>Empório das Pizzas</h3>
                    </a>
                </div>
                <nav className={`menu-nav ${menuOpen ? 'open' : ''}`}>
                    <ul>
                        <li className='home-btn'>
                            <a href="#home" onClick={handleMenuItemClick}>Home</a>
                        </li>
                        <li className='about-btn'>
                            <a href="#about" onClick={handleMenuItemClick}>Sobre</a>
                        </li>
                        <li><a href="#menu" onClick={handleMenuItemClick}>Cardápio</a></li>
                        <li><a href="#order" onClick={handleMenuItemClick}>Pedidos</a></li>
                        {children}
                    </ul>
                </nav>
                <div className="menu-icon" onClick={toggleMenu}>
                    <span className="material-icons">
                        {menuOpen ? 'close' : 'menu'}
                    </span>
                </div>
            </div>
        </header>
    );
}

Menu.propTypes = {
    children: PropTypes.node,
};

export default Menu;
