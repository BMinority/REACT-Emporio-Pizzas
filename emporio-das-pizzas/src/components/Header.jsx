import '../css/Header.css'

import Logo from '../assets/emporio-logo.jpeg'

function Header() {
    return (
        <div className="header">
            <img src={Logo} alt="Image logo" />
            <h1>Empório das Pizzas Itália</h1>
        </div>
    )
}

export default Header