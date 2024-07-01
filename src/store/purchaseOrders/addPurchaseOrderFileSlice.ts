import { createSlice } from '@reduxjs/toolkit'

interface saveFileSlice {
    data: []
}

const initialState: saveFileSlice = {
    data: []
}

const addPurchaseOrderFileSlice = createSlice({
    name: 'addPurchaseOrderFileSlice',
    initialState,
    reducers: {
        saveFile(state, action) {
            state.data = action.payload;
        }
    }
});

export const { saveFile  } = addPurchaseOrderFileSlice.actions;

export default addPurchaseOrderFileSlice.reducer;