import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import dataReducer from 'redux/dataReducer';

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
  
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
