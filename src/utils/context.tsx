import React from 'react'
import Matrix from '../models/matrix'
import { AppContextState,AppContextType } from '../@types/state';




const defaultState= {
    grid: 4,
    theme:true,
    userName: 'anonymous',
    playersNumber: 1,
    matrix:[]
}


export const AppContext = React.createContext<AppContextType | null>(null);

export const AppProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [state, setState] = React.useState<AppContextState>(defaultState)

    return (
        <AppContext.Provider value={{ state , setState }}>
            {children}
        </AppContext.Provider>
    );
  };
  
