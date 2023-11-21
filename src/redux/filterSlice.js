import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filter: '',
    },
    reducers: {
        changeFilter(state, action) {
            state.filter = action.payloud;
        },
    },
});

export const filterReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;