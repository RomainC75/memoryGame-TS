import React from 'react'
import { AppContextState, AppContextType, MatrixContextState, PlayersContextState } from '../@types/state';

const defaultState= {
    grid: 4,
    theme:true,
    userName: 'anonymous',
    playersNumber: 1
}
const defaultMatrix={
    matrix:[],
    temp:[-1,-1]
}
const defaultPlayers={
    points:[0,0,0,0],
    turn:0,
    time:[0,0],
    finished:false,
    restarted:false
}

export const AppContext = React.createContext<AppContextType | null>(null);

export const AppProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [ state, setState ] = React.useState<AppContextState>(defaultState)
    const [ matrix, setMatrix ] = React.useState<MatrixContextState>(defaultMatrix)
    const [ players, setPlayers ] = React.useState<PlayersContextState>(defaultPlayers)
    return (
        <AppContext.Provider value={{ state, setState, matrix, setMatrix, players, setPlayers }}>
            {children}
        </AppContext.Provider>
    );
  };
  
