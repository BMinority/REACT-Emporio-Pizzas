import '../css/Hour.css'
import { useState, useEffect } from 'react';

function Relogio({ setAberto }) {
    const [horaAtual, setHoraAtual] = useState(new Date());
    const [statusPizzaria, setStatusPizzaria] = useState('Fechado');

    useEffect(() => {
        // Atualiza a hora atual
        const intervalId = setInterval(() => {
            setHoraAtual(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        // status da pizzaria com base na hora atual
        const hora = horaAtual.getHours();
        const minutos = horaAtual.getMinutes();
        const estaAberto = (hora > 16 && hora < 22) || (hora === 22 && minutos <= 30);

        setStatusPizzaria(estaAberto ? 'Aberto' : 'Fechado');
        setAberto(estaAberto);
    }, [horaAtual, setAberto]);

    const estiloStatus = {
        color: statusPizzaria === 'Aberto' ? 'green' : 'red'
    };

    return (
        <div className="relogio-container">
            <h3>Horário: {horaAtual.toLocaleTimeString()}</h3>
            <h4 style={estiloStatus}>Status: {statusPizzaria}</h4>
        </div>
    );
}

export default Relogio;