import '../css/Promo.css'

function Promo() {
    // URLs do WhatsApp para os dois números da pizzaria
    const whatsappUrl01 = "https://api.whatsapp.com/send?phone=5581989206365&text=Olá, gostaria de saber as promoções do dia.";
    const whatsappUrl02 = "https://api.whatsapp.com/send?phone=5581989206365&text=Olá, gostaria de saber as promoções do dia.";

    return (
        <section id="promocoes" className="promo-section">
            <h2>Promoção do Dia - De Segunda à Sexta</h2>
            <p>Consulte nossas promoções do dia pelo WhatsApp:</p>
            <div className='promo-whats-btn'>
                <p>
                    <a href={whatsappUrl01} target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-whatsapp"></i> (81) 98920-6365
                    </a>
                </p>
                <p>
                    <a href={whatsappUrl02} target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-whatsapp"></i> (81) 98920-6365
                    </a>
                </p>
            </div>
        </section>
    );
}

export default Promo;
