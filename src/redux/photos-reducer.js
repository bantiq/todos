import { createSlice } from "@reduxjs/toolkit";

const photosSlice = createSlice({
    name: 'Photos',
    initialState: [
        {
            id: '',
            disabled: false,
            data: '',
            inputError: false
        },
    ],
    reducers: {
        changeId: (state, action) => {
            const newId = {
                id: action.payload,
                disabled: true
            }
            state.splice(0, 1, newId)
        },
        changeVisible: (state, action) => {
            if (action.payload === state[0].id) {
                state[0].disabled = true
            } else {
                state[0].disabled = false
            }
        },
        setData: (state, action) => {
            state[0].data = action.payload
        },
        changeInputError: (state, action) => {
            if (0 < action.payload && action.payload <= 100) {
                state[0].inputError = false
            } else {
                state[0].inputError = true
            }
        }
    }

})

export const { changeId, changeVisible, setData, changeInputError } = photosSlice.actions;
export default photosSlice.reducer;