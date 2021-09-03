import { createSelectorHook } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
// import { canvasStore } from './modules/canvas'
import logger from 'redux-logger'
import { combineReducers } from 'redux'

import { canvasSlice } from './modules/canvas'
import { environments } from '@/environments'

export const createStore = () =>
  configureStore({
    reducer: combineReducers({
      canvas: canvasSlice.reducer,
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: environments.NODE_ENV !== 'production',
  })

export type AppDispatch = ReturnType<typeof createStore>['dispatch']

export type RootState = ReturnType<typeof createStore>['getState']

export const useSelector = createSelectorHook<RootState>()
