import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  userProfile: {
    userId: null, // Assuming the ID will be set dynamically, initializing as null
    country: '', // Initialize as empty string, assuming a string will be input
    customURL: '', // Initialize as empty string
    description: '', // Initialize as empty string
    aboutYourSelf: '', // Initialize as empty string
    niches: [], // Initialize as an empty array, expecting an array of strings later
    gender: '', // Initialize as empty string
  }
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer