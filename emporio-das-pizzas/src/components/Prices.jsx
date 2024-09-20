import '../css/Prices.css'
import Promo from './Promo'

function Prices() {
    return (
        <div className="prices-container">
            <h2>Preços R$</h2>
            <div className="prices">
                <ul>
                    <li>
                        1 Sabor = R$ 20,00
                    </li>
                    <li>
                        2 Sabores = R$ 25,00
                    </li>
                </ul>
            </div>
            <Promo />
        </div>
    )
}

export default Prices