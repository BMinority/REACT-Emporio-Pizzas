import { useState } from 'react';
import PropTypes from 'prop-types';
import '../css/Menu.css';

function Menu({ children }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="menu-header">
            <div className="menu-container">
                <nav className={`menu-nav ${menuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#menu">Pizzas</a></li>
                        <li><a href="#contact">Pedidos</a></li>
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
