import React, { createContext , useState , FC , ReactNode } from 'react'
import Matrix from '../models/matrix';


export interface IProviderProps {
    children?: any;
}

type AppContextState = { 
    grid: number;
    theme: boolean;
    userName: string;
    playersNumber: number;
    matrix: number[][];
}

const appCtxDefaultValue = {
    state: { 
        grid: 4,
        theme:true,
        userName: 'anonymous',
        playersNumber: 1
     },
    setState: (state: AppContextState) => {} // noop default callback
};
  
export const AppContext = createContext(appCtxDefaultValue);
  
export const AppProvider = (props: IProviderProps) => {

    const [state, setState] = useState(appCtxDefaultValue.state);

    return (
      <AppContext.Provider value={{ state, setState }}>
        {props.children}
      </AppContext.Provider>
    );
  };
  