import { useState } from 'react';
import '../css/Order.css';
import Relogio from './Relogio';

function Pedidos() {
    const [aberto, setAberto] = useState(true);

    const [endereco, setEndereco] = useState({
        nome: '',
        cep: '',
        rua: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        estado: ''
    });
    const [enderecoSalvo, setEnderecoSalvo] = useState(null);

    // Estados para os Pedidos
    const [sabores, setSabores] = useState([]);
    const [pedidos, setPedidos] = useState([]);

    //mudanças do formulário de endereço
    const handleEnderecoChange = (e) => {
        setEndereco({
            ...endereco,
            [e.target.name]: e.target.value
        });
    };

    const salvarEndereco = () => {
        if (validarEndereco()) {
            setEnderecoSalvo(endereco);
            setEndereco({
                nome: '',
                cep: '',
                rua: '',
                numero: '',
                complemento: '',
                bairro: '',
                cidade: '',
                estado: ''
            });
        } else {
            alert("Por favor, preencha todos os campos obrigatórios.");
        }
    };

    const validarEndereco = () => {
        return endereco.nome && endereco.rua && endereco.numero && endereco.bairro &&
            endereco.cidade && endereco.estado;
    };

    const editarEndereco = () => {
        setEndereco(enderecoSalvo);
        setEnderecoSalvo(null);
    };

    const excluirEndereco = () => {
        setEnderecoSalvo(null);
    };

    //seleção de sabores
    const handleSaborChange = (e) => {
        const saborSelecionado = e.target.value;
        if (e.target.checked) {
            if (sabores.length < 2) {
                setSabores([...sabores, saborSelecionado]);
            }
        } else {
            setSabores(sabores.filter(sabor => sabor !== saborSelecionado));
        }
    };

    const salvarPedido = () => {
        if (sabores.length > 0) {
            setPedidos([...pedidos, sabores]);
            setSabores([]);
        }
    };

    const limparSabores = () => {
        setSabores([]);
    };

    const excluirPedido = (index) => {
        const novosPedidos = pedidos.filter((_, i) => i !== index);
        setPedidos(novosPedidos);
    };

    const gerarMensagemWhatsApp = () => {
        if (!enderecoSalvo || pedidos.length === 0) return '';

        const saudacao = 'Olá! Gostaria de fazer meu pedido! :)\n\n';
        const mensagemEndereco = `Nome: ${enderecoSalvo.nome}\nEndereço de Entrega:\nCEP: ${enderecoSalvo.cep}\nRua: ${enderecoSalvo.rua}, Nº: ${enderecoSalvo.numero}\nComplemento: ${enderecoSalvo.complemento}\nBairro: ${enderecoSalvo.bairro}\nCidade: ${enderecoSalvo.cidade} - ${enderecoSalvo.estado}\n`;

        const mensagemPedidos = pedidos.map((pedido, index) =>
            `Pizza ${index + 1}: ${pedido.join(' e ')}`
        ).join('\n');

        const mensagemQuantidade = `Quantidade Total de Pizzas: ${pedidos.length}`;

        return `${saudacao}${mensagemEndereco}\n${mensagemPedidos}\n\n${mensagemQuantidade}`;
    };

    // URLs de WhatsApp
    const mensagem = encodeURIComponent(gerarMensagemWhatsApp());
    const whatsappUrl01 = `https://wa.me/5581989206365?text=${mensagem}`;
    const whatsappUrl02 = `https://wa.me/5581989206365?text=${mensagem}`;

    return (
        <section id="order" className="order-section">
            <Relogio setAberto={setAberto} />
            {aberto ? (
                <>
                    <h3>Faça seu Pedido</h3>

                    {!enderecoSalvo && (
                        <div className="address-form">
                            <label>
                                Nome:
                                <input type="text" name="nome" value={endereco.nome} onChange={handleEnderecoChange} required />
                            </label>
                            <label>
                                CEP:
                                <input type="text" name="cep" value={endereco.cep} onChange={handleEnderecoChange} />
                            </label>
                            <label>
                                Rua:
                                <input type="text" name="rua" value={endereco.rua} onChange={handleEnderecoChange} required />
                            </label>
                            <label>
                                Número:
                                <input type="text" name="numero" value={endereco.numero} onChange={handleEnderecoChange} required />
                            </label>
                            <label>
                                Complemento:
                                <input type="text" name="complemento" value={endereco.complemento} onChange={handleEnderecoChange} />
                            </label>
                            <label>
                                Bairro:
                                <input type="text" name="bairro" value={endereco.bairro} onChange={handleEnderecoChange} required />
                            </label>
                            <label>
                                Cidade:
                                <input type="text" name="cidade" value={endereco.cidade} onChange={handleEnderecoChange} required />
                            </label>
                            <label>
                                Estado:
                                <input type="text" name="estado" value={endereco.estado} onChange={handleEnderecoChange} required />
                            </label>
                            <div className='address-btn'>
                                <button onClick={salvarEndereco}>Salvar Endereço</button>
                                <button onClick={() => setEndereco({
                                    nome: '', cep: '', rua: '', numero: '', complemento: '',
                                    bairro: '', cidade: '', estado: ''
                                })}>Limpar</button>
                            </div>
                        </div>
                    )}

                    {enderecoSalvo && (
                        <div className="address-view">
                            <h4>Endereço de Entrega</h4>
                            <p>
                                Nome: {enderecoSalvo.nome}<br />
                                {enderecoSalvo.cep}, {enderecoSalvo.rua}, {enderecoSalvo.numero}, {enderecoSalvo.complemento}<br />
                                {enderecoSalvo.bairro}, {enderecoSalvo.cidade} - {enderecoSalvo.estado}
                            </p>
                            <button onClick={editarEndereco}>Editar Endereço</button>
                            <button onClick={excluirEndereco}>Excluir Endereço</button>
                        </div>
                    )}

                    <div className="flavors-form">
                        <h4>Escolha até 2 Sabores</h4>
                        <div className="flavors-options">
                            {['Calabresa c/ cheddar', 'Calabresa', 'Portuguesa', 'Frango c/ bacon', 'Frango c/ cheddar',
                                'Frango c/ catupiry', 'Frango', '2 Queijos', '4 Queijos', 'Dois amores', 'MM', 'Brigadeiro',
                                'Beijinho', 'Romeu e Julieta', 'Camarão', 'Atum', 'Peru defumado', 'Lombinho', 'Charque c/ catupiry',
                                'Carne de sol', 'Queijo do reino', 'Bacon'].map((sabor, index) => (
                                    <div key={index} className="flavor-option">
                                        <input type="checkbox" id={`sabor-${index}`} value={sabor}
                                            checked={sabores.includes(sabor)}
                                            onChange={handleSaborChange}
                                            disabled={sabores.length >= 2 && !sabores.includes(sabor)} />
                                        <label htmlFor={`sabor-${index}`}>{sabor}</label>
                                    </div>
                                ))}
                        </div>
                        <div>
                            <button onClick={salvarPedido} disabled={sabores.length === 0}>Salvar Pedido</button>
                            <button onClick={limparSabores}>Limpar Sabores</button>
                        </div>
                    </div>

                    <div className="order-summary">
                        <h4>Resumo dos Pedidos</h4>
                        <ul>
                            {pedidos.map((pedido, index) => (
                                <li key={index}>
                                    <div>{pedido.join(' e ')}</div>
                                    <button onClick={() => excluirPedido(index)}>Excluir</button>
                                </li>
                            ))}
                        </ul>
                        <p>Total de Pizzas: {pedidos.length}</p>
                    </div>

                    <div className="whatsapp-buttons">
                        <a href={whatsappUrl01} target="_blank" rel="noopener noreferrer">
                            Enviar para (81) 98920-6365
                        </a>
                        <a href={whatsappUrl02} target="_blank" rel="noopener noreferrer">
                            Enviar para (81) 98920-6365
                        </a>
                    </div>
                </>
            ) : (
                <div className="fechado-mensagem">
                    <h3 style={{ color: 'red' }}>A pizzaria está fechada. Por favor, volte das 17h às 22h30!</h3>
                </div>
            )}

        </section>
    );
}

export default Pedidos;
