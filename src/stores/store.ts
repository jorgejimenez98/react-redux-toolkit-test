/* eslint-disable import/named */
import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

import { appSlices } from "./slices"

import { api } from "@/services"

// Main Store definition
export const createStore = () =>
  configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      ...appSlices
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(api.middleware)
  })

export const store = createStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


// Helper Redux hooks
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector