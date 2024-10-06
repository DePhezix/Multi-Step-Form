import { configureStore } from '@reduxjs/toolkit'
import stepReducer from './step/stepSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      stepsInfo: stepReducer
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']