import './App.css'
import Cardapio from './components/Cardapio'
import Order from './components/Order'
// import Header from './components/Header'
import Home from './components/Home'
import Menu from './components/Menu'
import Sobre from './components/Sobre'

function App() {

  return (
    <>
      {/*
      <Header />
      */}
      <Menu />
      <main>
        <Home />
        <Sobre />
        <hr />
        <Cardapio />
        <Order />
      </main>
      <footer>
        <p>© 2024 Bruno Coelho. Todos os direitos reservados.</p>
      </footer>
    </>
  )
}

export default App
