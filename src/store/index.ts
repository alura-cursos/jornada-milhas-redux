import { configureStore } from '@reduxjs/toolkit';
import usuario from './reducers/usuario';

const store = configureStore({
  reducer: {
    usuario
  }
});

export default store;