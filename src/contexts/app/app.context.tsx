import {
  createContext, Dispatch, useContext, useReducer,
} from 'react'
import { NextPage } from 'next'

import { AppReducer, initialState } from '@/contexts/app/app.reducer'
import { AppActionType, AppStateType } from '@/contexts/app/app.type'

type ContextType = {
  state: AppStateType
  dispatch: Dispatch<AppActionType>
}

const AppContext = createContext<ContextType>({
  state: initialState,
  dispatch: () => {},
})

export const useAppContext = () => useContext(AppContext)

export const AppContextProvider: NextPage = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}
