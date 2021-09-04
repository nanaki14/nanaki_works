import { createSelectorHook } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import { canvasSlice, State as CanvasState } from './modules/canvas'
import { environments } from '@/environments'

export type RootState = {
  canvas: CanvasState
}

export const createStore = () =>
  configureStore({
    reducer: combineReducers({
      canvas: canvasSlice.reducer,
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: environments.NODE_ENV !== 'production',
  })

export type AppDispatch = ReturnType<typeof createStore>['dispatch']

export const useSelector = createSelectorHook<RootState>()
