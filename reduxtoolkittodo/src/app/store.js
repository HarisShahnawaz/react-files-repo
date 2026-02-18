import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';
export const store = confifureStore({
    reducer:  todoReducer
})