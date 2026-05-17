  import { configureStore } from '@reduxjs/toolkit'
  import counterReducer from './counter/CounterSlice.js'
  import todoReducer from './todo/TodoSlice.js'
  export const store = configureStore({
    reducer: {
      counter: counterReducer,
      todo: todoReducer 
    },
  })