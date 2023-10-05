import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    backgroundColor: {
        name: "Lights out",
        primary: "#000",
        secondary: "#16181c",
        third: "#202327"
    },
    color: {
        name: "blue",
        primary: "rgb(29,155,240)",
        secondary: "rgb(26, 140, 216)",
        base: "#e7e9ea",
        baseSecondary: "#71767b"
    },
    boxShadow: {
        shadow: "rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px",
    },

    fontSize: 15
}

const appearance = createSlice({
    name: "appearance",
    initialState,
    reducers: {
        _setBackgroundColor: (state, action) => {
            state.backgroundColor = action.payload
        },
        _setColor: (state, action) => {
            state.color = action.payload
        },
        _setFontSize: (state, action) => {
            state.fontSize = action.payload
        },
        _setBoxShadow: (state, action) => {
            state.boxShadow = action.payload
        }
    }
})

export const { _setBackgroundColor, _setColor, _setFontSize, _setBoxShadow } = appearance.actions
export default appearance.reducer