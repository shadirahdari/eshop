// eslint-disable-next-line import/namespace,import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/namespace,import/default,import/no-named-as-default,import/no-named-as-default-member
import modalOrderSlice from '../src/modalOrderSlice.js';


const store = configureStore({reducer: {modal: modalOrderSlice.reducer}})

export default store;
