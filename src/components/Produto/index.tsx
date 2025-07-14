import { useDispatch } from 'react-redux'
import { Produto as ProdutoType } from '../../App'
import * as S from './styles'

import { adicionar, remover } from '../../store/reducers/favoritos'
import { adicionar as adicionarCarrinho } from '../../store/reducers/carrinho'

type Props = {
  produto: ProdutoType
  favoritar: (produto: ProdutoType) => void
  estaNosFavoritos: boolean
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto, estaNosFavoritos }: Props) => {
  const dispatch = useDispatch()

  const removerFavorito = () => {
    if (estaNosFavoritos) {
      dispatch(remover(produto))
    } else {
      dispatch(adicionar(produto))
    }
  }

  const btnCarrinho = () => {
    dispatch(adicionarCarrinho(produto))
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={removerFavorito} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={btnCarrinho} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
