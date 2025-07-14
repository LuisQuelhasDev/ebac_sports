import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      if (state.itens.find((p) => p.id === produto.id)) {
        alert('Item já Adicionado')
      } else {
        state.itens.push(produto)
      }
    },
    remover: (state, action: PayloadAction<Produto>) => {
      const produtoId = action.payload.id
      state.itens = state.itens.filter((p) => p.id !== produtoId)
    }
  }
})

export const { adicionar, remover } = favoritosSlice.actions
export default favoritosSlice.reducer
