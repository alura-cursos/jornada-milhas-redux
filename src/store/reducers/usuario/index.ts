import { createSlice } from "@reduxjs/toolkit";
import { logar as logarService } from "src/services/usuarios";
import { Usuario } from 'src/types/usuario';

interface InitialState {
  usuarioLogado: Usuario | undefined
}

const initialState: InitialState = { usuarioLogado: undefined }

const usuarioSlice = createSlice({
  initialState,
  name: "usuario",
  reducers: {
    logar: (state, action) => {
      const usuarioEncontrado = logarService(
        action.payload.emailOuCpf,
        action.payload.senha
      );
      if(!usuarioEncontrado) throw new Error('Email/CPF ou senha incorretos');
      state.usuarioLogado = action.payload;
    },
  },
});

export const { logar } = usuarioSlice.actions;

export default usuarioSlice.reducer;
