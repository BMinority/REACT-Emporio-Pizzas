function Cardapio() {
    return (
        <section id="menu" className="menu-section">
            <h2>Nosso Cardápio</h2>

            <h3>Pizzas Tradicionais</h3>
            <ul>
                <li>Calabresa c/ cheddar (queijo, cebola, calabresa, cheddar)
                </li>
                <li>Calabresa (queijo, cebola e calabresa)
                </li>
                <li>Portuguesa (queijo, presunto, cebola, milho e ovo)
                </li>
                <li>Frango com bacon (frango, queijo e bacon)
                </li>
                <li>Frango com cheddar (frango, queijo e cheddar)
                </li>
                <li>Frango com catupiry (frango, queijo e catupiry)
                </li>
                <li>Frango (frango e queijo)
                </li>
                <li>2 Queijos (catupiry e mussarela)
                </li>
                <li>4 Queijos (catupiry, mussarela, cheddar e parmesão)
                </li>
            </ul>

            <h3>Pizzas Doces</h3>
            <ul>
                <li>Dois Amores (chocolate branco e preto)</li>
                <li>MM (chocolate e MM)</li>
                <li>Brigadeiro (chocolate e granulado)</li>
                {/* Continue listando as pizzas doces... */}
            </ul>

            <h3>Pizzas Especiais</h3>
            <ul>
                <li>Camarão (camarão e queijo)</li>
                <li>Atum (atum, mussarela e cebola)</li>
                <li>Peru Defumado (mussarela, peito de peru e catupiry)</li>
                {/* Continue listando as pizzas especiais... */}
            </ul>
        </section>
    )
}

export default Cardapio