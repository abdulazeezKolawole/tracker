import { configureStore } from '@reduxjs/toolkit';
import bugsSliceReducer from './features/bugSlice';

 const store = configureStore({
    reducer:{
      bugs: bugsSliceReducer
    }
 })

 export default store;

 export type RootState = ReturnType<typeof store.getState>
