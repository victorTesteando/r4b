import { configureStore } from '@reduxjs/toolkit'
import addCollaboratosFileSlice from './collaboratos/addCollaboratosFileSlice'

export const store = configureStore({
    reducer: {
        fileSavedCollaborators: addCollaboratosFileSlice
    },
})