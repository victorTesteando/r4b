import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: []
}

const addCollaboratosFileSlice = createSlice({
    name: 'addCollaboratosFile',
    initialState,
    reducers: {
        saveFile(state, action) {
            state.data = action.payload;
        }
    }
});

export const { saveFile  } = addCollaboratosFileSlice.actions;

export default addCollaboratosFileSlice.reducer;