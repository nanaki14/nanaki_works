import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type State = {
  circleSize: number
}

export const initialState = { circleSize: 0.55 } as State

export const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    changeBgCircleSize: (state, action: PayloadAction<number>) => {
      state.circleSize = action.payload
    },
  },
})

export const actions = canvasSlice.actions
