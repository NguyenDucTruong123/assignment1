import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 100000000000000
} as { count: number }

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count++;
        },
        decrement: (state) => {
            state.count--;
        },
        increase: (state, action) => {
            state.count += action.payload.a;
        }
    }
})
export const { increment, decrement, increase } = counterSlice.actions;

export default counterSlice.reducer;