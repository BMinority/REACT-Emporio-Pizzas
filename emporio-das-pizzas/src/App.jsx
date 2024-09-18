import './App.css'
import Cardapio from './components/Cardapio'
import Contato from './components/Contato'
import Header from './components/Header'
import Home from './components/Home'
import Menu from './components/Menu'
import Sobre from './components/Sobre'

function App() {

  return (
    <>
      <Header />
      <Menu />
      <main>
        <Home />
        <Sobre />
        <Cardapio />
        <Contato />
      </main>
    </>
  )
}

export default App
