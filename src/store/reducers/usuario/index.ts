import { createSlice } from '@reduxjs/toolkit';

const usuarioSlice = createSlice({
  initialState: {
    usuarioLogado: {},
  },
  name: 'usuario',
  reducers: {}
});

export default usuarioSlice.reducer;