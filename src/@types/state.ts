export interface AppContextState {
    grid: number;
    theme: boolean;
    userName: string;
    playersNumber: number;
}

export interface MatrixContextState{
    matrix: [number,number][][];
    temp: number[];
}

export interface PlayersContextState{
    points:number[];
    turn:number;
    time:number[];
    finished:boolean;
    restarted:boolean;
}

export type AppContextType = {
    state: AppContextState ;
    setState: (state: AppContextState) => void;
    matrix: MatrixContextState;
    setMatrix: (state: MatrixContextState) => void;
    players: PlayersContextState;
    setPlayers: (state: PlayersContextState) => void;
};


export type MatrixContextType = {
    matrix: MatrixContextState;
    setMatrix: (state: MatrixContextState) => void;
}