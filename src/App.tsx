import { useDispatch, useSelector } from 'react-redux'
import { adicionar } from './store/reducers/favoritos'

import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'

import { RootReducer } from './store'
import { Produto } from './components/Produto/styles'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const dispatch = useDispatch()
  const favoritos = useSelector((state: RootReducer) => state.favoritos.itens)

  const favoritar = (produto: Produto) => {
    dispatch(adicionar(produto))
  }
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos favoritos={favoritos} favoritar={favoritar} />
      </div>
    </>
  )
}

export default App
