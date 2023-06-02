import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { logar as logarService } from "src/services/usuarios";
import { Usuario } from 'src/types/usuario';

interface LoginPayload {
  emailOuCpf: Usuario['cpf'] | Usuario['email'],
  senha: Usuario['senha']
}

interface InitialState {
  usuarioLogado: Usuario | undefined
}

const initialState: InitialState = { usuarioLogado: undefined }

const usuarioSlice = createSlice({
  initialState,
  name: "usuario",
  reducers: {
    logar: (state, action: PayloadAction<LoginPayload>) => {
      const usuarioEncontrado = logarService(
        action.payload.emailOuCpf,
        action.payload.senha
      );
      if(!usuarioEncontrado) throw new Error('Email/CPF ou senha incorretos');
      state.usuarioLogado = usuarioEncontrado;
    },
    deslogar: (state) => {
      state.usuarioLogado = undefined;
    }
  },
});

export const { logar, deslogar } = usuarioSlice.actions;

export default usuarioSlice.reducer;
